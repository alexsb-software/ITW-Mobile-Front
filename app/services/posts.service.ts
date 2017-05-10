import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class PostsService{

    constructor(private http:Http){}

    public getPosts(){
       return this.http.get("/API/posts.json").map(res => res.json())
    }
}