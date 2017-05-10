"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getPosts = function () {
        return this.http.get("/API/posts.json").map(function (res) { return res.json(); });
    };
    return PostsService;
}());
PostsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxzQ0FBbUM7QUFDbkMsbUJBQWlCO0FBR2pCLElBQWEsWUFBWTtJQUVyQixzQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRSxDQUFDO0lBRXpCLCtCQUFRLEdBQWY7UUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBR2dCLFdBQUk7R0FGcEIsWUFBWSxDQU94QjtBQVBZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvUnhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvc3RzU2VydmljZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3N0cygpe1xyXG4gICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvQVBJL3Bvc3RzLmpzb25cIikubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgfVxyXG59Il19