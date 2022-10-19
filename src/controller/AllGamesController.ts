import { Request, Response } from "express";
import { Game } from "../entities/Game";
import { AllGamesService } from "../service/AllGamesService";

export class AllGamesController {

  async handle(request: Request, response: Response) {
    const service = new AllGamesService();
    const games = await service.execute();
    return response.json(games)
  }

}