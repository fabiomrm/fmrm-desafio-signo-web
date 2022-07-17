import { Option } from './Option';

export interface Poll {
  id: string;
  title: string;
  begin_date: string;
  end_date: string;
  options?: Option[];
}

