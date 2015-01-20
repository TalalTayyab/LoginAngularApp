(function () {

    var app = angular.module("loginApp");

    //person controller
    app.controller('personCtrl', ['$scope', 'personDataHandler',   '$routeParams','messageHandler', function ($scope, personDataHandler,  $routeParams, messageHandler) {

        $scope.msg = {};

        personDataHandler.get($routeParams.id).success(function (data) {

            $scope.person = data;

        }).error(function (data, status) {
            //inherited
            $scope.msg = messageHandler.getError(data)
            
        });

    }]);



}());