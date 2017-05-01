"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var application = require("application");
var AppComponent = (function () {
    function AppComponent() {
        this.ios = null;
        this.android = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (application.ios) {
            this.ios = true;
            this.android = false;
        }
        else if (application.android) {
            this.android = true;
            this.ios = false;
        }
    };
    AppComponent.prototype.closeDrawer = function () {
        this.drawer.sideDrawer.closeDrawer();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], AppComponent.prototype, "drawer", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxzRUFBa0Y7QUFDbEYseUNBQTRDO0FBTTVDLElBQWEsWUFBWTtJQUp6QjtRQU1XLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBa0IxQixDQUFDO0lBaEJHLCtCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBSUQsa0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3hDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFMc0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBZ0IsZ0NBQXNCOzRDQUFDO0FBaEJoRSxZQUFZO0lBSnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7R0FDVyxZQUFZLENBcUJ4QjtBQXJCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UmFkU2lkZURyYXdlckNvbXBvbmVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IGFwcGxpY2F0aW9uID0gcmVxdWlyZSgnYXBwbGljYXRpb24nKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHB1YmxpYyBpb3MgPSBudWxsO1xuICAgIHB1YmxpYyBhbmRyb2lkID0gbnVsbDtcblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIGlmKGFwcGxpY2F0aW9uLmlvcyl7XG4gICAgICAgICAgICB0aGlzLmlvcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFuZHJvaWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYXBwbGljYXRpb24uYW5kcm9pZCl7XG4gICAgICAgICAgICB0aGlzLmFuZHJvaWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pb3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwcml2YXRlIGRyYXdlcjpSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgY2xvc2VEcmF3ZXIoKXtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2lkZURyYXdlci5jbG9zZURyYXdlcigpXG4gICAgfVxufVxuIl19