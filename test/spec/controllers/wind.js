'use strict';

describe('Controller: WindCtrl', function () {

  // load the controller's module
  beforeEach(module('wetterstationApp'));

  var WindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WindCtrl = $controller('WindCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WindCtrl.awesomeThings.length).toBe(3);
  });
});
