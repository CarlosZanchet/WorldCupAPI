import { Router, Request, Response } from 'express'
import { AllGamesController } from './controller/AllGamesController';

const routes = Router();

routes.get("/all-games", new AllGamesController().handle)

export { routes }