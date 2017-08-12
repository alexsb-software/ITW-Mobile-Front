import {Hashtag} from "./Hashtag.model";

export interface Post{
  content: string;
  user: string;
  created_at: string;
  hashtags: string[];
}
