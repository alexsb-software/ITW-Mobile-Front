import { Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId:module.id,
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent{

    constructor(private router:Router){}

    navigateTo(){
        this.router.navigate(['map'])
    }
}
