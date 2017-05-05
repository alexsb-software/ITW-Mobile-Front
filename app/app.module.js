"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var home_component_1 = require("./views/main/home/home.component");
var notifications_component_1 = require("./views/main/notifications/notifications.component");
var post_component_1 = require("./views/post/post.component");
var map_component_1 = require("./views/map/map.component");
var main_component_1 = require("./views/main/main.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            angular_1.SIDEDRAWER_DIRECTIVES,
            main_component_1.MainComponent,
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            post_component_1.PostComponent,
            notifications_component_1.NotificationsComponent,
            map_component_1.MapComponent
        ],
        providers: [],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxzRUFBaUY7QUFDakYsbUVBQStEO0FBQy9ELDhGQUEwRjtBQUMxRiw4REFBMEQ7QUFDMUQsMkRBQXVEO0FBQ3ZELDhEQUEwRDtBQTRCMUQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBeEJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLCtCQUFxQjtZQUNyQiw4QkFBYTtZQUNiLDRCQUFZO1lBQ1osOEJBQWE7WUFDYiw4QkFBYTtZQUNiLGdEQUFzQjtZQUN0Qiw0QkFBWTtTQUNmO1FBQ0QsU0FBUyxFQUFFLEVBRVY7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1NJREVEUkFXRVJfRElSRUNUSVZFU30gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi92aWV3cy9tYWluL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9uc0NvbXBvbmVudH0gZnJvbSBcIi4vdmlld3MvbWFpbi9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50XCI7XG5pbXBvcnQge1Bvc3RDb21wb25lbnR9IGZyb20gXCIuL3ZpZXdzL3Bvc3QvcG9zdC5jb21wb25lbnRcIjtcbmltcG9ydCB7TWFwQ29tcG9uZW50fSBmcm9tIFwiLi92aWV3cy9tYXAvbWFwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tIFwiLi92aWV3cy9tYWluL21haW4uY29tcG9uZW50XCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU0lERURSQVdFUl9ESVJFQ1RJVkVTLFxuICAgICAgICBNYWluQ29tcG9uZW50LFxuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIFBvc3RDb21wb25lbnQsXG4gICAgICAgIE5vdGlmaWNhdGlvbnNDb21wb25lbnQsXG4gICAgICAgIE1hcENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG5cbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19