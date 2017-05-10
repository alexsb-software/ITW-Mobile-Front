import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {PostsService} from "../../../services/posts.service";

@Component({
    moduleId:module.id,
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    public postsData;

    constructor(private router:Router, private postsService:PostsService){}

    ngOnInit(){
        this.postsService.getPosts().subscribe((res) => {
            this.postsData = res;
        })
    }

    navigateTo(arr){
        this.router.navigate(arr)
    }
}
