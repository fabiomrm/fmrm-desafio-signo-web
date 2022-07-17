import { prisma } from "../../../database/prismaClient";

export class GetUpcomingPollsUseCase {
  async execute() {
    const today = new Date();

    const upcomingPolls = await prisma.poll.findMany({
      where: {
        begin_date: {
          gt: today
        }
      },
      include: {
        options: true
      }
    })

    return upcomingPolls;
  }
}