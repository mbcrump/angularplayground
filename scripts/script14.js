(function(){

    var app = angular.module("githubViewer", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main14.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "user14.html",
                controller: "UserController"
            })
        .otherwise({redirectTo:"/main"});

    });

}());