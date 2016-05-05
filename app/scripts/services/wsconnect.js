'use strict';

/**
 *
 * @ngdoc service
 * @name wetterstationApp.wsConnect
 * @description
 * # wsConnect
 * Service in the wetterstationApp.
 */
angular.module('wetterstationApp')
  .service('wsConnect', function ($rootScope, $timeout) {

      var status = "Connecting....";
      //var WfSocket = new WebSocket('ws://wshohenberg.no-ip.org:8080');
      var WfSocket = new WebSocket('ws://192.168.43.217:8080');
      var socketData = null;

      
          WfSocket.onopen = function () {
              console.log("onopen");
              $rootScope.$apply(function () {
                  status = "Connected";
                  var message = {cmd: "run"};
                  WfSocket.send(JSON.stringify(message));
              });

          };
      
          WfSocket.onmessage = function (message) {
              $rootScope.$apply(function () {
                  var jsonParse = JSON.parse(message.data);
                  socketData = jsonParse;
              });
              $timeout(function () {
                  WfSocket.close();
              }, 300000);
          };
          

      WfSocket.onclose = function (message) {
          status = "Socket closed";
      };


      WfSocket.onerror = function (message) {
          status = "Socket Error" + message.data;
          console.log("Socket Error" + message.data);
      };

      // Public API here

      /*this.connect = function () {
          WfSocket = new WebSocket('ws://wshohenberg.no-ip.org:8080');
      }; */
      
      this.getState = function () {
          return status;
      };
        
      this.getData = function () {
          return socketData;
      };
      
      this.close = function () {
          WfSocket.close();
      };

  });
