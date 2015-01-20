(function () {

    var app = angular.module("loginApp");


    //routing
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/person-list', {

            templateUrl: 'partials/person-list.html',
            requiresLogin: true,
            controller: "personListCtrl"

        }).when('/login', {

            templateUrl: 'partials/login.html',
            requiresLogin: false

        }).when('/person/:id', {

            templateUrl: 'partials/person.html',
            requiresLogin: true,
            controller: "personCtrl"

        }).otherwise({

            redirectTo: "person-list"
        });
    }]);

}());