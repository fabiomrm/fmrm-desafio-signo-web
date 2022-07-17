import { prisma } from "../../../database/prismaClient";

interface IUpdateVoteInOption {
  optionId: string;
}

export class UpdateVoteInOptionUseCase {
  async execute({ optionId: id }: IUpdateVoteInOption) {
    const updatedVoteCount = await prisma.option.update({
      where: {
        id
      },
      data: {
        vote_count: {
          increment: 1
        }
      }
    })

    return updatedVoteCount;
  }
}