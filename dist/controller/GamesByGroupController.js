"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesByGroupController = void 0;
const GamesByGroupService_1 = require("../service/GamesByGroupService");
class GamesByGroupController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new GamesByGroupService_1.GamesByGroupService();
            const group = request.params.group;
            const games = yield service.execute(group.toUpperCase());
            if (games.length > 0) {
                return response.status(200).json(games);
            }
            return response.status(204).json({ message: 'No Game Found' });
        });
    }
}
exports.GamesByGroupController = GamesByGroupController;
//# sourceMappingURL=GamesByGroupController.js.map