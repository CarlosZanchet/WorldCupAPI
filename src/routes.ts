import { Router, Request, Response } from 'express'
import { AllGamesController } from './controller/Games/AllGamesController';
import { AllTeamController } from './controller/Teams/AllTeamController';
import { GamesByGroupController } from './controller/Games/GamesByGroupController';
import { TeamByIdController } from './controller/Teams/TeamByIdController';
import { TeamsByGroupController } from './controller/Teams/TeamsByGroupController';
import { GamesByStepController } from './controller/Games/GamesByStepController';

const routes = Router();

routes.get("/games", new AllGamesController().handle)
routes.get("/games-group/:group", new GamesByGroupController().handle)
routes.get("/games-step/:step", new GamesByStepController().handle)



routes.get("/teams", new AllTeamController().handle)
routes.get("/teams-id/:id", new TeamByIdController().handle)
routes.get("/teams-group/:group", new TeamsByGroupController().handle)

export { routes }