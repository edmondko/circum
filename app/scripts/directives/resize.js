'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:resize
 * @description
 * # resize
 */
angular.module('cvApp')
	.directive('resize', function($window) {
		return function(scope) {
			var w = angular.element($window);
			scope.getWindowDimensions = function() {
				return {
					'h': w.height(),
					'w': w.width()
				};
			};
			scope.$watch(scope.getWindowDimensions, function(newValue) {
				scope.windowHeight = newValue.h;
				scope.windowWidth = newValue.w;

				scope.style = function() {
					return {
						'height': (newValue.h) + 'px',
						// 'width': (newValue.w) + 'px'
					};
				};

			}, true);

			w.bind('resize', function() {
				scope.$apply();
			});
		};
	});
