import express from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();

const controller = new UserController();

router.get('/', controller.getUser);

router.get('/check', controller.checkUserProfile);

router.post('/', controller.saveUser);

export { router };
