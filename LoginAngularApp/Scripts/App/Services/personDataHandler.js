(function () {

    var app = angular.module("loginApp");

    //Responsible for getting person CRUD operations - so far only retrieval
    app.factory("personDataHandler", ['tokenHandler', '$http', function (tokenHandler, $http) {

        var url = 'api/person/';
        var hdrs = {};
        var token = tokenHandler.getLoginToken();

        if (token) {
            hdrs.Authorization = 'Bearer ' + token;
        };



        return {
            getAll: function () {
                return $http.get(url, { headers: hdrs });
            },
            get: function (id) {
                return $http.get(url + id, { headers: hdrs })
            }
        }

    }]);



}());