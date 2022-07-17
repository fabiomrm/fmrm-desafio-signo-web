import { Request, Response } from "express";
import { GetUpcomingPollsUseCase } from "./GetUpcomingPollsUseCase";

export class GetUpcomingPollsController {
  async handle(req: Request, res: Response) {
    try {
      const getUpcomingPollsUseCase = new GetUpcomingPollsUseCase();
      const result = await getUpcomingPollsUseCase.execute();

      return res.json(result);
    } catch (e) {
      return res.status(500).json({ message: "Internal server error!" });
    }
  }
}