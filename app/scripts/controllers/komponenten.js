'use strict';

/**
 * @ngdoc function
 * @name wetterstationApp.controller:KomponentenCtrl
 * @description
 * # KomponentenCtrl
 * Controller of the wetterstationApp
 */
angular.module('wetterstationApp')
  .controller('KomponentenCtrl', function ($scope,$routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.id = $routeParams.id;
    
  });
