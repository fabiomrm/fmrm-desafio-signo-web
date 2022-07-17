import { Request, Response } from "express";
import { GetOngoingPollsUseCase } from "./GetOngoingPollsUseCase";

export class GetOngoingPollsController {
  async handle(req: Request, res: Response) {
    try {
      const getOngoingPollsUseCase = new GetOngoingPollsUseCase();
      const result = await getOngoingPollsUseCase.execute();

      return res.json(result);
    } catch (e) {
      return res.status(500).json({ message: "Internal server error!" })
    }

  }
}