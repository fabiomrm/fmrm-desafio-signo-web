import { Option } from "../types/Option";

export function calculateTotal(pollOptions: Option[]) {
  return pollOptions.reduce((acc, op) => acc + op.vote_count, 0);
}