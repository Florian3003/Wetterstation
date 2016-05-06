'use strict';

describe('Service: loginSV', function () {

  // load the service's module
  beforeEach(module('wetterstationApp'));

  // instantiate service
  var loginSV;
  beforeEach(inject(function (_loginSV_) {
    loginSV = _loginSV_;
  }));

  it('should do something', function () {
    expect(!!loginSV).toBe(true);
  });

});
