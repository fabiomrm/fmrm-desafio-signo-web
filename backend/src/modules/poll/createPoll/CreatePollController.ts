import { Request, Response } from "express";
import { CreatePollUseCase } from "./CreatePollUseCase";


export class CreatePollController {
  async handle(req: Request, res: Response) {
    const { title, beginDate, endDate, options } = req.body;

    const createPollUseCase = new CreatePollUseCase();

    const result = await createPollUseCase.execute({ title, beginDate, endDate, options });
    return res.status(201).json(result)
  }
}