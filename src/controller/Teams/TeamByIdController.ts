import { Request, Response } from "express";
import { TeamByIdService } from "../../service/Teams/TeamByIdService";

export class TeamByIdController {
  async handle(request: Request, response: Response) {
    const service = new TeamByIdService();

    const idTeam = request.params.id;
    const team = await service.execute(idTeam.toUpperCase())

    if(team){
      return response.status(200).json(team);
    }

    return response.status(204).json({ message: 'Team not found' });
  }
}