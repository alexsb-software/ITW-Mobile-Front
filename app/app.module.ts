import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import {SIDEDRAWER_DIRECTIVES} from "nativescript-telerik-ui/sidedrawer/angular";
import {HomeComponent} from "./views/main/home/home.component";
import {NotificationsComponent} from "./views/main/notifications/notifications.component";
import {PostComponent} from "./views/post/post.component";
import {MapComponent} from "./views/map/map.component";
import {MainComponent} from "./views/main/main.component";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        MainComponent,
        AppComponent,
        HomeComponent,
        PostComponent,
        NotificationsComponent,
        MapComponent
    ],
    providers: [

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
