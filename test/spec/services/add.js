'use strict';

describe('Service: add', function () {

  // load the service's module
  beforeEach(module('happyHourApp'));

  // instantiate service
  var add;
  beforeEach(inject(function(_add_) {
    add = _add_;
  }));

  it('should do something', function () {
    expect(!!add).toBe(true);
  });

});
