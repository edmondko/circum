'use strict';
var dataService = angular.module('jsonService', ['ngResource']);

dataService.factory('jsonService', ['$resource',
    function($resource) {
        return $resource('data.json', {}, {
            'query': {
                method: 'GET',
                isArray: false
            }
        });
    }
]);
