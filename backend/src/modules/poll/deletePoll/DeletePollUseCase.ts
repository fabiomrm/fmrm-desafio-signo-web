import { prisma } from "../../../database/prismaClient";

interface IDeletePoll {
  pollId: string;
}

export class DeletePollUseCase {
  async execute({ pollId: id }: IDeletePoll) {

    try {
      return await prisma.poll.delete({
        where: {
          id
        }
      })
    } catch (e) {
      throw new Error("Poll does not exist!")
    }
  }
}