(function () {

    var app = angular.module("loginApp");


    //routing
    app.config(['$routeProvider', 'LA_CONFIG', function ($routeProvider, LA_CONFIG) {
        $routeProvider.when('/' + LA_CONFIG.URL.LOGIN, {

            templateUrl: LA_CONFIG.TMPL.LOGIN,
            requiresLogin: false

        }).when('/person/:id', {

            templateUrl: 'partials/person.html',
            requiresLogin: true,
            controller: "personCtrl"

        }).when('/person-list', {

            templateUrl: 'partials/person-list.html',
            requiresLogin: true,
            controller: "personListCtrl"

        }).otherwise({

            redirectTo: "person-list"
        });
    }]);

}());