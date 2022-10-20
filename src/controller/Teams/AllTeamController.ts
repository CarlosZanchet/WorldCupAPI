import { Request, Response } from "express";
import { AllTeamService } from "../../service/Teams/AllTeamService";

export class AllTeamController {
  async handle(request: Request, response: Response) {
    const service = new AllTeamService();

    const teams = await service.execute();

    return response.status(200).json(teams)
  }
}