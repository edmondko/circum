'use strict';

describe('Directive: animationBtn', function () {

  // load the directive's module
  beforeEach(module('ngSassPatternsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<animation-btn></animation-btn>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the animationBtn directive');
  }));
});
