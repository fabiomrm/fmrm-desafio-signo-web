import { Request, Response } from "express";
import { GetPollsUseCase } from "./GetPollsUseCase";


export class GetPollsController {
  async handle(req: Request, res: Response) {
    const getPollsUseCase = new GetPollsUseCase();
    const result = await getPollsUseCase.execute();

    return res.json(result);
  }
}