'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
    .controller('MainCtrl', function($scope, $http, jsonService) {
        $scope.pageTitle = 'Edmond Ko\'s Interactive CV!';
        $scope.navigation = ['work', 'skills', 'education'];
        /*load data from service*/
        $scope.items = [];

        $scope.data = jsonService.query(function (response) {
            $scope.skills = response.skills;
            $scope.education = response.education;
            $scope.jobs = response.jobs;

        });


        /*Set data to scope*/




    });
