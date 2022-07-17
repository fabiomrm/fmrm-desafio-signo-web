import { Request, Response } from "express";
import { CreateOptionUseCase } from "./CreateOptionUseCase";

export class CreateOptionController {

  async handle(req: Request, res: Response) {
    const { text, pollId } = req.body;
    const createOptionUseCase = new CreateOptionUseCase();
    const result = await createOptionUseCase.execute({ text, pollId });

    return res.status(201).json(result);
  }
}