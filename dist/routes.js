"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const AllGamesController_1 = require("./controller/Games/AllGamesController");
const AllTeamController_1 = require("./controller/Teams/AllTeamController");
const GamesByGroupController_1 = require("./controller/Games/GamesByGroupController");
const TeamByIdController_1 = require("./controller/Teams/TeamByIdController");
const TeamsByGroupController_1 = require("./controller/Teams/TeamsByGroupController");
const GamesByStepController_1 = require("./controller/Games/GamesByStepController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/games", new AllGamesController_1.AllGamesController().handle);
routes.get("/games-group/:group", new GamesByGroupController_1.GamesByGroupController().handle);
routes.get("/games-step/:step", new GamesByStepController_1.GamesByStepController().handle);
routes.get("/teams", new AllTeamController_1.AllTeamController().handle);
routes.get("/teams-id/:id", new TeamByIdController_1.TeamByIdController().handle);
routes.get("/teams-group/:group", new TeamsByGroupController_1.TeamsByGroupController().handle);
//# sourceMappingURL=routes.js.map