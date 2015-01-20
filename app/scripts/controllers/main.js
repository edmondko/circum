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
        $scope.navVisible = true;

        $scope.data = jsonService.query(function (response) {
            /*Set data to scope*/
            $scope.skills = response.skills;
            $scope.education = response.education;
            $scope.jobs = response.jobs;

        });

        $scope.navToggle = function(ev) {
            var element = ev.srcElement ? ev.srcElement : ev.target;
            ev.preventDefault();
            $(element).toggleClass('positive negative').find('.fa').toggleClass('fa-bars fa-close');
            $('#mainNav').toggleClass('opened');
        };
    });
