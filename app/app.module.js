"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var home_component_1 = require("./views/main/home/home.component");
var notifications_component_1 = require("./views/main/notifications/notifications.component");
var post_component_1 = require("./views/post/post.component");
var map_component_1 = require("./views/map/map.component");
var main_component_1 = require("./views/main/main.component");
var nativescript_angular_1 = require("nativescript-angular");
var posts_service_1 = require("./services/posts.service");
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
            app_routing_1.AppRoutingModule,
            nativescript_angular_1.NativeScriptHttpModule
        ],
        declarations: [
            angular_1.SIDEDRAWER_DIRECTIVES,
            angular_2.LISTVIEW_DIRECTIVES,
            main_component_1.MainComponent,
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            post_component_1.PostComponent,
            notifications_component_1.NotificationsComponent,
            map_component_1.MapComponent
        ],
        providers: [
            posts_service_1.PostsService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxzRUFBaUY7QUFDakYsb0VBQTZFO0FBQzdFLG1FQUErRDtBQUMvRCw4RkFBMEY7QUFDMUYsOERBQTBEO0FBQzFELDJEQUF1RDtBQUN2RCw4REFBMEQ7QUFDMUQsNkRBQTREO0FBQzVELDBEQUFzRDtBQThCdEQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBMUJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtZQUNoQiw2Q0FBc0I7U0FDekI7UUFDRCxZQUFZLEVBQUU7WUFDViwrQkFBcUI7WUFDckIsNkJBQW1CO1lBQ25CLDhCQUFhO1lBQ2IsNEJBQVk7WUFDWiw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IsZ0RBQXNCO1lBQ3RCLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTSURFRFJBV0VSX0RJUkVDVElWRVN9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7TElTVFZJRVdfRElSRUNUSVZFU30gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vdmlld3MvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge05vdGlmaWNhdGlvbnNDb21wb25lbnR9IGZyb20gXCIuL3ZpZXdzL21haW4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQb3N0Q29tcG9uZW50fSBmcm9tIFwiLi92aWV3cy9wb3N0L3Bvc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge01hcENvbXBvbmVudH0gZnJvbSBcIi4vdmlld3MvbWFwL21hcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vdmlld3MvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UG9zdHNTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9wb3N0cy5zZXJ2aWNlXCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU0lERURSQVdFUl9ESVJFQ1RJVkVTLFxuICAgICAgICBMSVNUVklFV19ESVJFQ1RJVkVTLFxuICAgICAgICBNYWluQ29tcG9uZW50LFxuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIFBvc3RDb21wb25lbnQsXG4gICAgICAgIE5vdGlmaWNhdGlvbnNDb21wb25lbnQsXG4gICAgICAgIE1hcENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFBvc3RzU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=