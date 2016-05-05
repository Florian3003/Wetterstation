'use strict';

/**
 * @ngdoc function
 * @name wetterstationApp.controller:ServicetesterCtrl
 * @description
 * # ServicetesterCtrl
 * Controller of the wetterstationApp
 */
angular.module('wetterstationApp')
  .controller('ServicetesterCtrl', function ($scope,wsConnect,myFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.testFactory = function () {
      myFactory.getAlert(1);
    };


  });
