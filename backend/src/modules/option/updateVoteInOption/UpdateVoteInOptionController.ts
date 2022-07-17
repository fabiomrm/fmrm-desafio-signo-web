import { Request, Response } from "express";
import { UpdateVoteInOptionUseCase } from "./UpdateVoteInOptionUseCase";


export class UpdateVoteInOptionController {
  async handle(req: Request, res: Response) {
    const { optionId } = req.body;
    try {
      const updateVoteInOptionUseCase = new UpdateVoteInOptionUseCase();
      const result = await updateVoteInOptionUseCase.execute({ optionId });
      return res.json(result);
    } catch (e) {
      return res.status(500).json({ message: "Internal server error!" })
    }
  }
}