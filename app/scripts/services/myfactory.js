'use strict';

/**
 * @ngdoc service
 * @name wetterstationApp.myFactory
 * @description
 * # myFactory
 * Factory in the wetterstationApp.
 */
angular.module('wetterstationApp')
  .factory('myFactory', function () {
    // Service logic
    // ...

    
    
    var cnt = 0;

    // Public API here
    return {
      getAlert: function (value) {
        cnt += value;
        alert('MyFactor Cnt: ' + cnt);
      }
    };
  });
