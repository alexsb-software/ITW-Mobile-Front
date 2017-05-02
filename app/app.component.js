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
    AppComponent.prototype.openDrawer = function () {
        this.drawer.sideDrawer.toggleDrawerState();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxzRUFBa0Y7QUFDbEYseUNBQTRDO0FBTTVDLElBQWEsWUFBWTtJQUp6QjtRQU1XLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBcUIxQixDQUFDO0lBbkJHLCtCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBSUQsaUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUNELGtDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBUnNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQWdCLGdDQUFzQjs0Q0FBQztBQWhCaEUsWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDO0dBQ1csWUFBWSxDQXdCeEI7QUF4Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JhZFNpZGVEcmF3ZXJDb21wb25lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoJ2FwcGxpY2F0aW9uJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBwdWJsaWMgaW9zID0gbnVsbDtcbiAgICBwdWJsaWMgYW5kcm9pZCA9IG51bGw7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICBpZihhcHBsaWNhdGlvbi5pb3Mpe1xuICAgICAgICAgICAgdGhpcy5pb3MgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hbmRyb2lkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGFwcGxpY2F0aW9uLmFuZHJvaWQpe1xuICAgICAgICAgICAgdGhpcy5hbmRyb2lkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW9zID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHJpdmF0ZSBkcmF3ZXI6UmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIG9wZW5EcmF3ZXIoKXtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2lkZURyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgIH1cbiAgICBjbG9zZURyYXdlcigpe1xuICAgICAgICB0aGlzLmRyYXdlci5zaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxufVxuIl19