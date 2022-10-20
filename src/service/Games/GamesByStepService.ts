import { Game } from "../../entities/Game";
import { oitavasDeFinal } from "../../utils/OitavasDeFinal";
import { primeiraRodada } from "../../utils/PrimeiraRodada";
import { quartasDeFinal } from "../../utils/QuartasDeFinal";
import { segundaRodada } from "../../utils/SegundaRodada";
import { disputaTerceiroQuarto, final, semiFinais } from "../../utils/SemiFinal";
import { terceiraRodada } from "../../utils/TerceiraRodada";

export class GamesByStepService {
  async execute(step: string): Promise<Game[]> {
    
    // PRIMEIRA FASE
    if(step === '1') {
      return primeiraRodada;
    }

    // SEGUNDA FASE
    if(step === '2') {
      return segundaRodada;
    }

    // TERCEIRA FASE
    if(step === '3') {
      return terceiraRodada;
    }


    // OITAVAS DE FINAL
    if(step === '4') {
      return oitavasDeFinal;
    }


    // QUARTAS DE FINAL
    if(step === '5') {
      return quartasDeFinal;
    }

    // SEMI FINAIS
    if(step === '6') {
      return semiFinais;
    }

    // TERCEIRO E QUARTO
    if(step === '7') {
      return [disputaTerceiroQuarto];
    }

    // FINAL
    if(step === '8') {
      return [final];
    }

    return [];

  }
}