import { selecoes } from "../../utils/Selecoes";

export class TeamsByGroupService {
  async execute(group: string) {
    return selecoes.filter(team => team.group === group);
  }
}