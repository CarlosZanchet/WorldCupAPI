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
exports.TeamByIdController = void 0;
const TeamByIdService_1 = require("../service/TeamByIdService");
class TeamByIdController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new TeamByIdService_1.TeamByIdService();
            const idTeam = request.params.id;
            const team = yield service.execute(idTeam.toUpperCase());
            if (team) {
                return response.status(200).json(team);
            }
            return response.status(204).json({ message: 'Team not found' });
        });
    }
}
exports.TeamByIdController = TeamByIdController;
//# sourceMappingURL=TeamByIdController.js.map