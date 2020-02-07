import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/recipient', authMiddleware, RecipientController.store);
routes.put('/recipient', authMiddleware, RecipientController.update);

export default routes;
