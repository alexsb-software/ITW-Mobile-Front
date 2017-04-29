import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {HomeComponent} from "./views/home/home.component";
import {NotificationsComponent} from "./views/notifications/notifications.component";
import {PostComponent} from "./views/post/post.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "post", component: PostComponent },
    { path: "notifications", component: NotificationsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }