import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import {SIDEDRAWER_DIRECTIVES} from "nativescript-telerik-ui/sidedrawer/angular";
import {LISTVIEW_DIRECTIVES} from "nativescript-telerik-ui/listview/angular";
import {HomeComponent} from "./views/main/home/home.component";
import {NotificationsComponent} from "./views/main/notifications/notifications.component";
import {PostComponent} from "./views/post/post.component";
import {MapComponent} from "./views/map/map.component";
import {MainComponent} from "./views/main/main.component";
import {NativeScriptHttpModule} from "nativescript-angular";
import {PostsService} from "./services/posts.service";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        LISTVIEW_DIRECTIVES,
        MainComponent,
        AppComponent,
        HomeComponent,
        PostComponent,
        NotificationsComponent,
        MapComponent
    ],
    providers: [
        PostsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
