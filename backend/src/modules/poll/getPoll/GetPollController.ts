import { Request, Response } from "express";
import { GetPollUseCase } from "./GetPollUseCase";

export class GetPollController {
  async handle(req: Request, res: Response) {
    const { id: poll_id } = req.body;

    const getPollUseCase = new GetPollUseCase();
    const result = await getPollUseCase.execute({ poll_id });

    return res.json(result);

  }
}