import { Request, Response } from "express";
import { DeletePollUseCase } from "./DeletePollUseCase";

export class DeletePollController {
  async handle(req: Request, res: Response) {
    const { id: pollId } = req.params;
    const deletePollUseCase = new DeletePollUseCase();

    await deletePollUseCase.execute({ pollId });
    return res.status(204).send();

  }
}