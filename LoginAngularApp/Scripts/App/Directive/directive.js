(function () {

    var app = angular.module("loginApp");

    //directives
    app.directive("userLogin", ['tokenHandler', function (tokenHandler) {
        return {
            link: function (scope, element, attrs) {

            },
            restrict: 'EA',
            templateUrl: 'partials/userLogin.html',
            replace:false
        };
    }]);




   


}());