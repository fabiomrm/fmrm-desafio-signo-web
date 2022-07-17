import { prisma } from "../../../database/prismaClient";

interface IDeleteOption {
  optionId: string;
}

export class DeleteOptionUseCase {
  async execute({ optionId: id }: IDeleteOption) {
    try {
      await prisma.option.delete({
        where: {
          id
        }
      })
    } catch (e) {
      throw new Error("Option does not exist!")
    }
  }
}