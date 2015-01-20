﻿(function () {

    var app = angular.module("loginApp");

    //encapsulates information on how to store
    app.factory("storageHandler", ['$cookieStore', function ($cookieStore) {

        function isSessionStorageAvailable() {
            try {
                var key = 'test';
                sessionStorage.setItem(key, key);
                sessionStorage.removeItem(key);
                return true;
            } catch (e) {
                return false;
            }
        };

        var canUseSessionStorage = isSessionStorageAvailable();


        return {
            setItem: function (key, value) {
                if (canUseSessionStorage) {
                    sessionStorage.setItem(key, value);
                } else {
                    $cookieStore.put(key, value);

                };


            },

            removeItem: function (key) {

                if (canUseSessionStorage) {
                    sessionStorage.removeItem(key);
                } else {
                    $cookieStore.remove(key);

                };
            },

            getItem: function (key) {

                if (canUseSessionStorage) {
                    return sessionStorage.getItem(key);
                } else {
                    return $cookieStore.get(key);

                };
            }
        };



    }]);

}());