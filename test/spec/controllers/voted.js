'use strict';

describe('Controller: VotedCtrl', function() {

  // load the controller's module
  beforeEach(module('happyHourApp'));

  var VotedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    VotedCtrl = $controller('VotedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
