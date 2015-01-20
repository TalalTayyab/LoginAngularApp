(function () {

    var app = angular.module("loginApp");

    //service to transform error object (returned from api calls) into a message object.
    app.factory("messageHandler", function () {

        return {


            getError: function (err) {
                var msg = {};

                msg.title = angular.isDefined(err.error) ? err.error : "";
                msg.desc = angular.isDefined(err.error_description) ? err.error_description : (angular.isDefined(err.Message) ? err.Message : err);
                msg.hasError = true;
                msg.hasSucc = false;

                return msg;
            },


            getSucc: function (_title, _desc) {
                var msg = {};

                msg.title = _title;
                msg.desc = _desc;
                msg.hasError = false;
                msg.hasSucc = true;

                return msg;
            }

        };
    });//messageHandler



}());