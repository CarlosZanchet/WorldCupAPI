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
exports.TeamsByGroupController = void 0;
const TeamsByGroupService_1 = require("../../service/Teams/TeamsByGroupService");
class TeamsByGroupController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new TeamsByGroupService_1.TeamsByGroupService();
            const group = request.params.group;
            const teams = yield service.execute(group.toUpperCase());
            console.log('teams');
            if (teams.length > 0) {
                return response.status(200).json(teams);
            }
            return response.status(204).json({ message: 'Teams not found' });
        });
    }
}
exports.TeamsByGroupController = TeamsByGroupController;
//# sourceMappingURL=TeamsByGroupController.js.map