import { Request, Response } from "express";
import { GetUpcomingPollsUseCase } from "./GetUpcomingPollsUseCase";

export class GetUpcomingPollsController {
  async handle(req: Request, res: Response) {
    const getUpcomingPollsUseCase = new GetUpcomingPollsUseCase();

    const result = await getUpcomingPollsUseCase.execute();

    return res.json(result);
  }
}