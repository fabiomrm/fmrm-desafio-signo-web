import { Request, Response } from "express";
import { DeleteOptionUseCase } from "./DeleteOptionUseCase";

export class DeleteOptionController {
  async handle(req: Request, res: Response) {
    const { id: optionId } = req.params;

    const deleteOptionUseCase = new DeleteOptionUseCase();
    await deleteOptionUseCase.execute({ optionId });

    return res.status(204).send();

  }
}