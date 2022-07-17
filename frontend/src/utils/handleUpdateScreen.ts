import { Option } from "../types/Option";
import { Poll } from "../types/Poll";

export function handleUpdateScreen(poll: Poll[], data: Option) {
  const updatedPolls: Poll[] = [...poll];
  for (let i = 0; i < updatedPolls.length; i++) {
    for (let j = 0; j < updatedPolls[i].options!.length; j++) {
      if (updatedPolls[i].options![j].id === data.id) {
        updatedPolls[i].options![j] = data;
      }
    }
  }
  return updatedPolls;
}