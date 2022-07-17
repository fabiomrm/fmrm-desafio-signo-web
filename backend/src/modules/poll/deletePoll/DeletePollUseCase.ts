import { prisma } from "../../../database/prismaClient";

interface IDeletePoll {
  pollId: string;
}

export class DeletePollUseCase {
  async execute({ pollId: id }: IDeletePoll) {
    return await prisma.poll.delete({
      where: {
        id
      }
    })
  }
}