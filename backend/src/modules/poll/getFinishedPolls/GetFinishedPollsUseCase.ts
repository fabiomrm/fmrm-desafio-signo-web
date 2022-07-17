import { prisma } from "../../../database/prismaClient";


export class GetFinishedPollsUseCase {
  async execute() {
    const today = new Date();
    const finishedPolls = await prisma.poll.findMany({
      where: {
        end_date: {
          lt: today
        }
      },
      include: {
        options: true
      }
    })
    return finishedPolls;
  }
}