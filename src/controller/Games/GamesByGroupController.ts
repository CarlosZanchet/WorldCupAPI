import { Response, Request } from "express";
import { Game } from "../../entities/Game";
import { GamesByGroupService } from "../../service/Games/GamesByGroupService";

export class GamesByGroupController {
  async handle(request: Request, response: Response) {
    const service = new GamesByGroupService();
    const group = request.params.group;

    const games = await service.execute(group.toUpperCase());

    if(games.length > 0) {
      return response.status(200).json(games)
    }

    return response.status(204).json({ message: 'No Game Found'});
  }
}