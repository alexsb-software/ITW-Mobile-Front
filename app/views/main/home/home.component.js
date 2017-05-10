"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var posts_service_1 = require("../../../services/posts.service");
var HomeComponent = (function () {
    function HomeComponent(router, postsService) {
        this.router = router;
        this.postsService = postsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts().subscribe(function (res) {
            _this.postsData = res;
        });
    };
    HomeComponent.prototype.navigateTo = function (arr) {
        this.router.navigate(arr);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-home",
        templateUrl: "./home.component.html",
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, posts_service_1.PostsService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWdEO0FBQ2hELDBDQUF1QztBQUN2QyxpRUFBNkQ7QUFRN0QsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixNQUFhLEVBQVUsWUFBeUI7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUUsQ0FBQztJQUV2RSxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDdkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEdBQUc7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3RDLENBQUM7cUNBSzZCLGVBQU0sRUFBdUIsNEJBQVk7R0FKM0QsYUFBYSxDQWV6QjtBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Bvc3RzU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3Bvc3RzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIm5zLWhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgcHVibGljIHBvc3RzRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBwb3N0c1NlcnZpY2U6UG9zdHNTZXJ2aWNlKXt9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnBvc3RzU2VydmljZS5nZXRQb3N0cygpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvc3RzRGF0YSA9IHJlcztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKGFycil7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGFycilcbiAgICB9XG59XG4iXX0=