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
exports.GamesByGroupService = void 0;
const PrimeiraRodada_1 = require("../../utils/PrimeiraRodada");
const SegundaRodada_1 = require("../../utils/SegundaRodada");
const TerceiraRodada_1 = require("../../utils/TerceiraRodada");
class GamesByGroupService {
    execute(group) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = PrimeiraRodada_1.primeiraRodada.concat(SegundaRodada_1.segundaRodada).concat(TerceiraRodada_1.terceiraRodada);
            return games.filter(game => game.group === group);
        });
    }
}
exports.GamesByGroupService = GamesByGroupService;
//# sourceMappingURL=GamesByGroupService.js.map