'use strict';

describe('Controller: KomponentenCtrl', function () {

  // load the controller's module
  beforeEach(module('wetterstationApp'));

  var KomponentenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KomponentenCtrl = $controller('KomponentenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KomponentenCtrl.awesomeThings.length).toBe(3);
  });
});
