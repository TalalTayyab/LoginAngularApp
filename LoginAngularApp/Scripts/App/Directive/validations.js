(function () {

    var app = angular.module("loginApp");


    //validatePasswordlength
    app.directive('validatePasswordLength', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attr, ngModel) {

                function isValid(value) {

                    var maxLen = attr.passwordMaxLen || 10;

                    var isValid = true;

                    isValid = value != null && value.length >= maxLen;

                    return isValid;
                }


                //value changed
                ngModel.$parsers.unshift(function (value) {
                    ngModel.$setValidity('passwordLength', isValid(value));

                    return value;
                });

                //initial load
                ngModel.$formatters.unshift(function (value) {
                    ngModel.$setValidity('passwordLength', isValid(value, 1));

                    return value;
                });
            }
        }
    });


    //strong password
    app.directive('validateStrongPassword', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attr, ngModel) {

                function isValid(value) {

                    var isValid = true;

                    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
                    isValid = re.test(value);

                    return isValid;
                }


                //value changed
                ngModel.$parsers.unshift(function (value) {
                    ngModel.$setValidity('strongPassword', isValid(value));

                    return value;
                });

                //initial load
                ngModel.$formatters.unshift(function (value) {
                    ngModel.$setValidity('strongPassword', isValid(value, 1));

                    return value;
                });
            }
        }
    });


}());