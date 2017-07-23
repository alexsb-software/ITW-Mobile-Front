import {Hashtag} from "./Hashtag.model";

export interface Post{
  content: string;
  user: string;
  time_stamp: string;
  hashtags: Hashtag[];
}
