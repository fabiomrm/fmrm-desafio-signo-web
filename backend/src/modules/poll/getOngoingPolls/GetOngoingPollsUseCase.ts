import { prisma } from "../../../database/prismaClient";

export class GetOngoingPollsUseCase {
  async execute() {
    const today = new Date();

    const ongoingPolls = await prisma.poll.findMany({
      where: {
        AND: [
          { end_date: { gte: today } },
          { begin_date: { lte: today } }
        ]
      },
      include: {
        options: true
      }
    })

    return ongoingPolls;
  }
}