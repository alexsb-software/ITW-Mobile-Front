import {Component, OnInit, ViewChild} from "@angular/core";
import {RadSideDrawerComponent} from "nativescript-telerik-ui/sidedrawer/angular";
import application = require('application');

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit{

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

    closeDrawer(){
        this.drawer.sideDrawer.closeDrawer()
    }
}
