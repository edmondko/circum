'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
    .controller('MainCtrl', function($scope) {
        $scope.pageTitle = 'Edmond Ko\'s Interactive CV!';
        $scope.navigation = ['work', 'skills', 'education'];
        $scope.jobs = [{
        	from: 'May 2013',
        	to: 'Today',
        	position: 'Front-end Web Developer:',
        	employer: 'Cayetano Gaming (property of PaddyPower PLC)',
        	location: 'Sofia, Bulgaria',
        	business: 'Online Casino Games',
        	about: 'I\'m part of the Web team as a Front End Developer. My main responsibilities are developing and maintaining Web systemsfor the employees and managment of the company like: Task managing system; System for managing documentations for projects; Statistics for the games beeing played; Also I\'ve been part of the development for several HTML5 Casino Games for Mobile: BlackJack, Roulette;',
        	links: [{title:'Cayetano.bg', href:'http://site.cayetano.bg'}]
		},{
        	from: 'April 2013',
        	to: 'May 2013',
        	position: 'Front-end Web Developer:',
        	employer: 'Iteco',
        	location: 'Sofia, Bulgaria',
        	business: 'Outsourcing It Services',
        	about: '',
        	links: []
		}, {
        	to: 'April 2013',
        	from: 'January 2012',
        	position: 'Front-end Web Developer:',
        	employer: 'Avalith',
        	location: 'Sofia, Bulgaria',
        	business: 'Outsourcing It Services',
        	about: '',
        	links: [
        		{title:'HistoryPin', href:'http://historypin.com'},
        		{title:'WeAreWhatWeDo', href:'http://shiftdesign.org.uk'}
        	]
		}, {
        	to: 'December 2011',
        	from: 'August 2010',
        	position: 'Front-end Web Developer:',
        	employer: 'Antipodes Ltd',
        	location: 'Sofia, Bulgaria',
        	business: 'Outsourcing It Services',
        	about: '',
        	links: [
        		{title:'Antipodes.bg', href:'http://antipodes.bg'},
        		{title:'tweettowel', href:'http://shop.wearewhatwedo.org/tweettowel/'}
    		]}
		];

		$scope.education = [{
        	to: 'Today',
        	from: 'October 2009',
        	title: 'Information Technologies &amp; Telecommunications',
        	degree: 'Bachelor\'s degree',
        	school: 'New Bulgarian University',
        	location: 'Sofia, Bulgaria',
        	about: 'I\'m doing a Minor Program in Information Technologies alongside my major program Telecommunications.',
		},{
			to: 'June 2009',
        	from: 'September 2004',
        	title: 'Laser Technologies',
        	degree: 'Highschool Professional Degree',
        	school: 'NPGPTO M.V.Lomonosov',
        	location: 'Sofia, Bulgaria',
        	about: '',
		}];

    });
