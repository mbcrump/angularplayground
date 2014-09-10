(function(){

    var app = angular.module("githubViewer", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main15.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "user15.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "repo15.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/main"});
    });

}());