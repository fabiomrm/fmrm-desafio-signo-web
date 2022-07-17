import { Request, Response } from "express";
import { UpdateVoteInOptionUseCase } from "./UpdateVoteInOptionUseCase";


export class UpdateVoteInOptionController {
  async handle(req: Request, res: Response) {
    const { optionId } = req.body;

    const updateVoteInOptionUseCase = new UpdateVoteInOptionUseCase();
    const result = await updateVoteInOptionUseCase.execute({ optionId });

    return res.json(result);

  }
}