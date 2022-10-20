import { Game } from "../../entities/Game";
import { primeiraRodada } from "../../utils/PrimeiraRodada";
import { segundaRodada } from "../../utils/SegundaRodada";
import { terceiraRodada } from "../../utils/TerceiraRodada";

export class GamesByGroupService {
  async execute(group: string): Promise<Game[]> {
    const games = primeiraRodada.concat(segundaRodada).concat(terceiraRodada);
    return games.filter(game => game.group ===  group)
  }
}