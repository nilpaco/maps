'use strict';

angular.module('mapsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


