"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const AllGamesController_1 = require("./controller/AllGamesController");
const AllTeamController_1 = require("./controller/AllTeamController");
const GamesByGroupController_1 = require("./controller/GamesByGroupController");
const TeamByIdController_1 = require("./controller/TeamByIdController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/all-games", new AllGamesController_1.AllGamesController().handle);
routes.get("/by-group/:group", new GamesByGroupController_1.GamesByGroupController().handle);
routes.get("/teams", new AllTeamController_1.AllTeamController().handle);
routes.get("/teams/:id", new TeamByIdController_1.TeamByIdController().handle);
//# sourceMappingURL=routes.js.map