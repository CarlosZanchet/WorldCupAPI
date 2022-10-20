import { Request, Response } from "express";
import { GamesByStepService } from "../../service/Games/GamesByStepService";

export class GamesByStepController {
  async handle(request: Request, response: Response) {
    const service = new GamesByStepService();

    const step = request.params.step;

    const games = await service.execute(step.toString());

    if(games.length > 0) {
      return response.status(200).json(games);
    }

    return response.status(204).json({ message: 'No games found.' });
  }
}