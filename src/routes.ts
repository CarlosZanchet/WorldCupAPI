import { Router, Request, Response } from 'express'
import { AllGamesController } from './controller/AllGamesController';
import { AllTeamController } from './controller/AllTeamController';
import { GamesByGroupController } from './controller/GamesByGroupController';
import { TeamByIdController } from './controller/TeamByIdController';

const routes = Router();

routes.get("/all-games", new AllGamesController().handle)

routes.get("/by-group/:group", new GamesByGroupController().handle)

routes.get("/teams", new AllTeamController().handle)

routes.get("/teams/:id", new TeamByIdController().handle)

export { routes }