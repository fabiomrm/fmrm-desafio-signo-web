import { Request, Response } from "express";
import { GetPollsUseCase } from "./GetPollsUseCase";


export class GetPollsController {
  async handle(req: Request, res: Response) {

    try {
      const getPollsUseCase = new GetPollsUseCase();
      const result = await getPollsUseCase.execute();

      return res.json(result);
    } catch (e) {
      return res.status(500).json({ message: "Internal server error!" });
    }
  }
}