'use strict';

/**
 * @ngdoc overview
 * @name cvApp
 * @description
 * # cvApp
 *
 * Main module of the application.
 */
angular
    .module('cvApp',[
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'jsonService'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/about').when('/', '/about').otherwise('404');

        $stateProvider
	        .state('about', {
	            url: '/about',
	            templateUrl: 'views/about.html',
	            controller: 'MainCtrl'
	        })
            .state('work', {
                url: '/work',
                templateUrl: 'views/work.html',
                controller: 'MainCtrl'
            })
            .state('education', {
                url: '/education',
                templateUrl: 'views/education.html',
                controller: 'MainCtrl'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'views/projects.html',
                controller: 'MainCtrl'
            })

            .state('404', {
            	url: '/404',
                templateUrl: 'views/404.html',
			});

        /* When you have html5Mode enabled, the # character will no longer be used in your urls. The # symbol is useful because it requires no server side configuration. Without #, the url looks much nicer, but it also requires server side rewrites. */
        // $locationProvider.html5Mode(true);
    });
