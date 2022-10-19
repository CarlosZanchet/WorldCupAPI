"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const GameController_1 = require("./controller/GameController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/", new GameController_1.GameController().handle);
//# sourceMappingURL=routes.js.map