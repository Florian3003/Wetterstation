'use strict';

/**
 * @ngdoc function
 * @name wetterstationApp.controller:WindCtrl
 * @description
 * # WindCtrl
 * Controller of the wetterstationApp
 */
angular.module('wetterstationApp')
  .controller('WindCtrl', function ($scope,$rootScope, $interval, wsConnect) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    


    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      //wsConnect.close();
      console.log('Close onRoute change');
    });


      $scope.reqState = function () {
              $scope.socketState = wsConnect.getState();
      };

      $scope.reqData = function () {
              $scope.socketData = wsConnect.getData();
      };


      $interval($scope.reqState, 500);
      $interval($scope.reqData, 250);


  });
