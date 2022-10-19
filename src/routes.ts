import { Router, Request, Response } from 'express'
import { GameController } from './controller/GameController';

const routes = Router();

routes.get("/", new GameController().handle)

export { routes }