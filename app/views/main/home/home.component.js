"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.navigateTo = function () {
        this.router.navigate(['map']);
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
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF1QztBQVF2QyxJQUFhLGFBQWE7SUFFdEIsdUJBQW9CLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO0lBQUUsQ0FBQztJQUVwQyxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztxQ0FHNkIsZUFBTTtHQUZ4QixhQUFhLENBT3pCO0FBUFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpe31cblxuICAgIG5hdmlnYXRlVG8oKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydtYXAnXSlcbiAgICB9XG59XG4iXX0=