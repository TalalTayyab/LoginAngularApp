(function () {

    var app = angular.module("loginApp");

    // person list controller
    app.controller("personListCtrl", ['$scope', 'personDataHandler',   '$routeParams', '$location','messageHandler',
        function ($scope, personDataHandler,  $routeParams, $location,messageHandler) {

            $scope.msg = {};
            $scope.persons = {};

            personDataHandler.getAll().success(function (data) {

                $scope.persons = data;
            }).error(function (data, status) {

                //inherited
                $scope.msg = messageHandler.getError(data);
            });

            $scope.showPerson = function (p) {

                $location.path('person/' + p.id);
            };




        }]);



}());