import { prisma } from "../../../database/prismaClient";

interface IGetPoll {
  poll_id: string;
}
export class GetPollUseCase {
  async execute({ poll_id }: IGetPoll) {
    const poll = await prisma.poll.findFirst({
      where: {
        id: poll_id
      }
    })

    if (!poll) {
      throw new Error("Poll does not exist!")
    }

    return poll;
  }
}