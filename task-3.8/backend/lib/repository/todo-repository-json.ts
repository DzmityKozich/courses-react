import { ToDo } from '../models/ToDo';
import { RepositoryDef } from './repository-def';
import fs from 'fs';
import dotenv from 'dotenv';
import { injectable } from 'inversify';
import 'reflect-metadata';

// TODO: generate id, if it not setted

dotenv.config();

const filePath = process.env.JSON_PATH!;

const promisefy =
	(fn: Function) =>
	(...args: any[]): Promise<any> => {
		return new Promise((resolve, reject) => {
			return fn(...args, (err: any, data: any) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
	};

@injectable()
export class TodoRepositoryJson implements RepositoryDef {
	private todoList: ToDo[] = [];

	public async init(): Promise<void> {
		const readFileAsync = promisefy(fs.readFile);
		try {
			const todoListAsString = (await readFileAsync(filePath)).toString();
			this.todoList = (JSON.parse(todoListAsString) as ToDo[]).map(
				({ id, createdAt, isComplete, text, title }) => new ToDo(id, title, text, createdAt, isComplete)
			);
		} catch (error) {
			console.log(error);
		}
	}

	public getAll(): Promise<ToDo[]> {
		return Promise.resolve(this.todoList);
	}

	public async getById(id: string): Promise<ToDo | null> {
		const todoList = await this.getAll();
		return todoList.find((item) => id === item.id) || null;
	}

	public async create(todo: ToDo): Promise<ToDo> {
		const todoList = await this.getAll();
		const index = todoList.findIndex(({ id }) => id === todo.id);
		if (index !== -1) return todo;
		const newTodo = new ToDo(todo.id, todo.title, todo.text, Date.now(), todo.isComplete);
		todoList.push(newTodo);
		this.writeCahnges(todoList);
		return newTodo;
	}

	public async update(todo: ToDo): Promise<ToDo | null> {
		const todoList = await this.getAll();
		const index = todoList.findIndex(({ id }) => id === todo.id);
		if (index === -1) return null;
		const newTodo = new ToDo(todo.id, todo.title, todo.text, todo.createdAt, todo.isComplete);
		todoList.splice(index, 1, newTodo);
		this.writeCahnges(todoList);
		return newTodo;
	}

	public async delete(id: string): Promise<boolean> {
		const todoList = await this.getAll();
		const index = todoList.findIndex((todo) => id === todo.id);
		if (index === -1) return false;
		todoList.splice(index, 1);
		this.writeCahnges(todoList);
		return true;
	}

	private writeCahnges(todoList: ToDo[]): void {
		this.todoList = todoList;
		// fs.writeFileSync(filePath, JSON.stringify(todoList, null, '\t'));
	}
}
