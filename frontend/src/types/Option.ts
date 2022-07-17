import { Poll } from "./Poll";

export interface Option {
  id: string;
  text: string;
  vote_count: number;
  poll: Poll;
  pollId: string;
}