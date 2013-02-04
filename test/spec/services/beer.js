'use strict';

describe('Service: beer', function () {

  // load the service's module
  beforeEach(module('happyHourApp'));

  // instantiate service
  var beer;
  beforeEach(inject(function(_beer_) {
    beer = _beer_;
  }));

  it('should do something', function () {
    expect(!!beer).toBe(true);
  });

});
