'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
    .controller('MainCtrl', function($scope, $http) {
        $scope.pageTitle = 'Edmond Ko\'s Interactive CV!';
        $scope.navigation = ['work', 'skills', 'education'];

        $http.get('../../../data.json').
        success(function (response) {
            $scope.jobs = response.jobs;
            $scope.education = response.education;
            $scope.skills = response.skills;
            $scope.strings = response.strings;

        }).
        error(function (response) {

        });

    });
