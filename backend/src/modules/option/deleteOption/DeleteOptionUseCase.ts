import { prisma } from "../../../database/prismaClient";

interface IDeleteOption {
  optionId: string;
}

export class DeleteOptionUseCase {
  async execute({ optionId: id }: IDeleteOption) {

    await prisma.option.delete({
      where: {
        id
      }
    })
  }
}