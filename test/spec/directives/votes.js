'use strict';

describe('Directive: votes', function() {
  beforeEach(module('happyHourApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<votes></votes>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the votes directive');
  }));
});
