"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var application = require("application");
var MainComponent = (function () {
    function MainComponent() {
        this.ios = null;
        this.android = null;
    }
    MainComponent.prototype.ngOnInit = function () {
        if (application.ios) {
            this.ios = true;
            this.android = false;
        }
        else if (application.android) {
            this.android = true;
            this.ios = false;
        }
    };
    MainComponent.prototype.openDrawer = function () {
        this.drawer.sideDrawer.toggleDrawerState();
    };
    MainComponent.prototype.closeDrawer = function () {
        this.drawer.sideDrawer.closeDrawer();
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], MainComponent.prototype, "drawer", void 0);
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-main",
        templateUrl: "./main.component.html",
        styleUrls: ['./main.component.css']
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJEO0FBQzNELHNFQUFrRjtBQUNsRix5Q0FBNEM7QUFRNUMsSUFBYSxhQUFhO0lBTjFCO1FBT1csUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFxQjFCLENBQUM7SUFuQkcsZ0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUE7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFJRCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUFSc0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBZ0IsZ0NBQXNCOzZDQUFDO0FBZmhFLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3RDLENBQUM7R0FDVyxhQUFhLENBdUJ6QjtBQXZCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoJ2FwcGxpY2F0aW9uJyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLW1haW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbWFpbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGlvcyA9IG51bGw7XHJcbiAgICBwdWJsaWMgYW5kcm9pZCA9IG51bGw7XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBpZihhcHBsaWNhdGlvbi5pb3Mpe1xyXG4gICAgICAgICAgICB0aGlzLmlvcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYXBwbGljYXRpb24uYW5kcm9pZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaW9zID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwcml2YXRlIGRyYXdlcjpSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIG9wZW5EcmF3ZXIoKXtcclxuICAgICAgICB0aGlzLmRyYXdlci5zaWRlRHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZURyYXdlcigpe1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLnNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=