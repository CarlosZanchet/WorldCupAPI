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
exports.GamesByStepService = void 0;
const OitavasDeFinal_1 = require("../../utils/OitavasDeFinal");
const PrimeiraRodada_1 = require("../../utils/PrimeiraRodada");
const QuartasDeFinal_1 = require("../../utils/QuartasDeFinal");
const SegundaRodada_1 = require("../../utils/SegundaRodada");
const SemiFinal_1 = require("../../utils/SemiFinal");
const TerceiraRodada_1 = require("../../utils/TerceiraRodada");
class GamesByStepService {
    execute(step) {
        return __awaiter(this, void 0, void 0, function* () {
            // PRIMEIRA FASE
            if (step === '1') {
                return PrimeiraRodada_1.primeiraRodada;
            }
            // SEGUNDA FASE
            if (step === '2') {
                return SegundaRodada_1.segundaRodada;
            }
            // TERCEIRA FASE
            if (step === '3') {
                return TerceiraRodada_1.terceiraRodada;
            }
            // OITAVAS DE FINAL
            if (step === '4') {
                return OitavasDeFinal_1.oitavasDeFinal;
            }
            // QUARTAS DE FINAL
            if (step === '5') {
                return QuartasDeFinal_1.quartasDeFinal;
            }
            // SEMI FINAIS
            if (step === '6') {
                return SemiFinal_1.semiFinais;
            }
            // TERCEIRO E QUARTO
            if (step === '7') {
                return [SemiFinal_1.disputaTerceiroQuarto];
            }
            // FINAL
            if (step === '8') {
                return [SemiFinal_1.final];
            }
            return [];
        });
    }
}
exports.GamesByStepService = GamesByStepService;
//# sourceMappingURL=GamesByStepService.js.map