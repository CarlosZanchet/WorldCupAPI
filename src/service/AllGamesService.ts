import { Game } from "../entities/Game";
import { primeiraRodada } from "../utils/PrimeiraRodada";
import { segundaRodada } from "../utils/SegundaRodada";
import { terceiraRodada } from "../utils/TerceiraRodada";

export class AllGamesService {
  async execute(): Promise<Game[]> {
    const allGames: Game[] = primeiraRodada.concat(segundaRodada).concat(terceiraRodada);
    return allGames;
  }
}