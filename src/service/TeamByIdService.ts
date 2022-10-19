import { selecoes } from "../utils/Selecoes";

export class TeamByIdService {
  async execute(idTeam: string) {
    const team = selecoes.find(team => team.id === idTeam);
    return team
  }
}