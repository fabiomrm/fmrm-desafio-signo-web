import { Request, Response } from "express";
import { GetOngoingPollsUseCase } from "./GetOngoingPollsUseCase";

export class GetOngoingPollsController {
  async handle(req: Request, res: Response) {

    const getOngoingPollsUseCase = new GetOngoingPollsUseCase();
    const result = await getOngoingPollsUseCase.execute();

    return res.json(result);
  }
}