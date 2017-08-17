import { Speaker } from "./Speaker.model";
export class Session {
  id: number;
  start: string;
  end: string;
  day: number;
  description: string;
  hashtag_id: number;
  name: string;
  report_link: string;
  type: string;
  place: string;
  categories: { name: string }[];
  available: boolean;
  speakers: Speaker[];
  bookmark: boolean;
}
