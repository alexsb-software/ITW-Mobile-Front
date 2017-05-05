import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {HomeComponent} from "./views/main/home/home.component";
import {NotificationsComponent} from "./views/main/notifications/notifications.component";
import {PostComponent} from "./views/post/post.component";
import {MapComponent} from "./views/map/map.component";
import {MainComponent} from "./views/main/main.component";

const mainChildrenRoutes:Routes = [
    { path: "home", component: HomeComponent },
    { path: "notifications", component: NotificationsComponent },
];

const routes: Routes = [
    { path: "", redirectTo: "/main/home", pathMatch: "full" },
    { path: "main", component: MainComponent , children:mainChildrenRoutes },
    { path: "post", component: PostComponent },
    { path: "map", component: MapComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }