import { prisma } from "../../../database/prismaClient";

export class GetPollsUseCase {
  async execute() {
    const polls = await prisma.poll.findMany({
      include: {
        options: true
      }
    });

    return polls;
  }
}