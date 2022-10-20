import { Team } from "../../entities/Team";
import { selecoes } from "../../utils/Selecoes";

export class AllTeamService {
  async execute(): Promise<Team[]> {
    return selecoes;
  }
}