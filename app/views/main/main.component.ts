import {Component, OnInit, ViewChild} from "@angular/core";
import {RadSideDrawerComponent} from "nativescript-telerik-ui/sidedrawer/angular";
import application = require('application');

@Component({
    moduleId:module.id,
    selector: "ns-main",
    templateUrl: "./main.component.html",
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    public ios = null;
    public android = null;

    ngOnInit(){
        if(application.ios){
            this.ios = true;
            this.android = false
        }
        else if(application.android){
            this.android = true;
            this.ios = false
        }
    }

    @ViewChild(RadSideDrawerComponent) private drawer:RadSideDrawerComponent;

    openDrawer(){
        this.drawer.sideDrawer.toggleDrawerState();
    }
    closeDrawer(){
        this.drawer.sideDrawer.closeDrawer();
    }
}
