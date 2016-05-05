'use strict';

describe('Service: wsConnect', function () {

  // load the service's module
  beforeEach(module('wetterstationApp'));

  // instantiate service
  var wsConnect;
  beforeEach(inject(function (_wsConnect_) {
    wsConnect = _wsConnect_;
  }));

  it('should do something', function () {
    expect(!!wsConnect).toBe(true);
  });

});
