import { Request, Response } from "express";
import { GetFinishedPollsUseCase } from "./GetFinishedPollsUseCase";

export class GetFinishedPollsController {
  async handle(req: Request, res: Response) {

    try {
      const getFinishedPollsUseCase = new GetFinishedPollsUseCase();
      const result = await getFinishedPollsUseCase.execute();

      return res.json(result);
    } catch (e) {
      return res.status(500).json({ message: "Internal server error!" })
    }
  }
}