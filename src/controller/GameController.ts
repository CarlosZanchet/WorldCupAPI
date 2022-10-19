import { Request, Response } from "express";

export class GameController {

  async handle(request: Request, response: Response) {
    return response.status(200).json({ message: 'aleluia'});
  }

}