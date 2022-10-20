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
exports.AllGamesService = void 0;
const OitavasDeFinal_1 = require("../../utils/OitavasDeFinal");
const PrimeiraRodada_1 = require("../../utils/PrimeiraRodada");
const QuartasDeFinal_1 = require("../../utils/QuartasDeFinal");
const SegundaRodada_1 = require("../../utils/SegundaRodada");
const SemiFinal_1 = require("../../utils/SemiFinal");
const TerceiraRodada_1 = require("../../utils/TerceiraRodada");
class AllGamesService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const allGames = PrimeiraRodada_1.primeiraRodada.concat(SegundaRodada_1.segundaRodada)
                .concat(TerceiraRodada_1.terceiraRodada)
                .concat(OitavasDeFinal_1.oitavasDeFinal)
                .concat(QuartasDeFinal_1.quartasDeFinal)
                .concat(SemiFinal_1.semiFinais)
                .concat(SemiFinal_1.disputaTerceiroQuarto)
                .concat(SemiFinal_1.final);
            return allGames;
        });
    }
}
exports.AllGamesService = AllGamesService;
//# sourceMappingURL=AllGamesService.js.map