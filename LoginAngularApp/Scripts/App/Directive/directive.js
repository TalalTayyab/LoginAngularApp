(function () {

    var app = angular.module("loginApp");

    //directives
    app.directive("userLogin", ['tokenHandler', 'LA_CONFIG', function (tokenHandler, LA_CONFIG) {
        return {
            link: function (scope, element, attrs) {

            },
            restrict: 'EA',
            templateUrl: LA_CONFIG.TMPL.USER_LOGIN,
            replace:false
        };
    }]);




   


}());