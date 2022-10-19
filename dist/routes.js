"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const AllGamesController_1 = require("./controller/AllGamesController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/all-games", new AllGamesController_1.AllGamesController().handle);
//# sourceMappingURL=routes.js.map