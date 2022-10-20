import { Request, Response } from "express";
import { TeamsByGroupService } from "../../service/Teams/TeamsByGroupService";

export class TeamsByGroupController {
  async handle(request: Request, response: Response) {
    const service = new TeamsByGroupService();

    const group = request.params.group;

    const teams = await service.execute(group.toUpperCase());


    console.log('teams')

    if(teams.length > 0) {
      return response.status(200).json(teams);
    }

    return response.status(204).json({ message: 'Teams not found'});
  }
}