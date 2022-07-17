import { Request, Response } from "express";
import { DeletePollUseCase } from "./DeletePollUseCase";

export class DeletePollController {
  async handle(req: Request, res: Response) {
    const { id: pollId } = req.params;
    const deletePollUseCase = new DeletePollUseCase();
    try {
      await deletePollUseCase.execute({ pollId });
      return res.status(204).send();
    } catch (e) {
      return res.status(500).json({ message: "Poll not found!" })
    }
  }
}