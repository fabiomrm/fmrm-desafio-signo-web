import { prisma } from "../../../database/prismaClient";


interface IUpdatePoll {
  pollId: string;
  title: string;
  beginDate: string;
  endDate: string;
}
export class UpdatePollUseCase {
  async execute({ pollId, title, beginDate, endDate }: IUpdatePoll) {
    const updatedPoll = await prisma.poll.update({
      where: {
        id: pollId
      },
      data: {
        title,
        begin_date: new Date(beginDate),
        end_date: new Date(endDate)
      }
    })
    return updatedPoll;
  }
}