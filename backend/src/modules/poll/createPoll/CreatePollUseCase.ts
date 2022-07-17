import { Option } from "@prisma/client";
import { prisma } from "../../../database/prismaClient"

interface ICreatePoll {
  title: string;
  beginDate: string;
  endDate: string;
  options: Option[];
}

export class CreatePollUseCase {
  async execute({ title, beginDate, endDate, options }: ICreatePoll) {

    if (options.length < 3) {
      throw new Error("Provided insufficient amount of options!")
    }

    const begin_date = new Date(beginDate);
    const end_date = new Date(endDate);

    const newPoll = await prisma.poll.create({
      data: {
        title,
        begin_date,
        end_date,
        options: {
          create: options
        }
      },
      include: {
        options: true
      }
    })

    return newPoll;
  }
}