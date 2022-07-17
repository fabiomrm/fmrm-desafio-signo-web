import { Request, Response } from "express";
import { UpdatePollUseCase } from "./UpdatePollUseCase";

export class UpdatePollController {
  async handle(req: Request, res: Response) {
    const { id: pollId } = req.params;
    const { title, beginDate, endDate } = req.body;
    try {
      const updatePollUseCase = new UpdatePollUseCase();
      const result = await updatePollUseCase.execute({ pollId, title, beginDate, endDate });

      return res.json(result);
    } catch (e) {
      return res.status(500).json({ message: "Internal server error!" });
    }
  }
}