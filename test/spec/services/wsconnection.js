'use strict';

describe('Service: wsConnection', function () {

  // load the service's module
  beforeEach(module('wetterstationApp'));

  // instantiate service
  var wsConnection;
  beforeEach(inject(function (_wsConnection_) {
    wsConnection = _wsConnection_;
  }));

  it('should do something', function () {
    expect(!!wsConnection).toBe(true);
  });

});
