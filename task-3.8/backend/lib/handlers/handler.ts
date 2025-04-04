import { RequestHandler } from 'express';
import { DI } from '../inversify.config';
import { RepositoryDef } from '../repository/repository-def';

class ServerError {
	constructor(public message: string) {}
}

export class Handler {
	private repo = DI.get<RepositoryDef>(process.env.DB_TYPE || 'json');

	constructor() {
		this.repo.init();
	}

	public getAll: RequestHandler = async (_, res) => {
		const todoList = await this.repo.getAll();
		res.status(200).send(todoList);
	};

	public getById: RequestHandler<{ id: string }> = async (req, res) => {
		const todo = await this.repo.getById(req.params.id);
		if (todo) {
			res.status(200).send(todo);
		} else {
			res.status(404).send(new ServerError(`ToDo with id ${req.params.id} is not exist!`));
		}
	};

	public create: RequestHandler = async (req, res) => {
		try {
			const todo = await this.repo.create(req.body);
			res.status(200).send(todo);
		} catch (error) {
			console.log(error);
			res.status(400).send(new ServerError('Invalid data!'));
		}
	};

	public update: RequestHandler = async (req, res) => {
		try {
			const todo = await this.repo.update(req.body);
			res.status(200).send(todo);
		} catch (error) {
			console.log(error);
			res.status(400).send(new ServerError('Invalid data!'));
		}
	};

	delete: RequestHandler<{ id: string }> = async (req, res) => {
		const result = await this.repo.delete(req.params.id);
		if (result) {
			res.status(204).send();
		} else {
			res.status(404).send(new ServerError(`ToDo item with id ${req.params.id} not found!`));
		}
	};
}
