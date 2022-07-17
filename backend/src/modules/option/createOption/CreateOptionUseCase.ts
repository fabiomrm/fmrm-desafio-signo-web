import { prisma } from "../../../database/prismaClient";


interface ICreateOption {
  text: string;
  pollId: string;
}

export class CreateOptionUseCase {
  async execute({ text, pollId }: ICreateOption) {
    const newOption = await prisma.option.create({
      data: {
        text,
        pollId
      }
    })

    return newOption;
  }
}