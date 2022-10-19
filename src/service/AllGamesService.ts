import { Game } from "../entities/Game";
import { oitavasDeFinal } from "../utils/OitavasDeFinal";
import { primeiraRodada } from "../utils/PrimeiraRodada";
import { quartasDeFinal } from "../utils/QuartasDeFinal";
import { segundaRodada } from "../utils/SegundaRodada";
import { disputaTerceiroQuarto, final, semiFinais } from "../utils/SemiFinal";
import { terceiraRodada } from "../utils/TerceiraRodada";

export class AllGamesService {
  async execute(): Promise<Game[]> {
    const allGames: Game[] = primeiraRodada.concat(segundaRodada)
                                            .concat(terceiraRodada)
                                            .concat(oitavasDeFinal)
                                            .concat(quartasDeFinal)
                                            .concat(semiFinais)
                                            .concat(disputaTerceiroQuarto)
                                            .concat(final);
    return allGames;
  }
}