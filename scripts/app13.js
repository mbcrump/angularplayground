(function(){

    var app = angular.module("githubViewer", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "'../views/main13.html'",
                controller: "MainController"
            })
        .otherwise({redirectto:"/main"});

    });

}());