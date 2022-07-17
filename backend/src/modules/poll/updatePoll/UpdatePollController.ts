import { Request, Response } from "express";
import { UpdatePollUseCase } from "./UpdatePollUseCase";

export class UpdatePollController {
  async handle(req: Request, res: Response) {
    const { id: pollId } = req.params;
    const { title, beginDate, endDate } = req.body;
    const updatePollUseCase = new UpdatePollUseCase();
    const result = await updatePollUseCase.execute({ pollId, title, beginDate, endDate })

    return res.json(result);
  }
}