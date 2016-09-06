var app = angular.module("CodingApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/theCodes/home.html"
        })
        .when("/postingPage", {
            templateUrl: "components/theCodes/postPage.html",
            controller: "PostsController"
        })
}]);
