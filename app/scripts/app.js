'use strict';

/**
 * @ngdoc overview
 * @name wetterstationApp
 * @description
 * # wetterstationApp
 *
 * Main module of the application.
 */
angular
  .module('wetterstationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Wind', {
        templateUrl: 'views/wind.html',
        controller: 'WindCtrl',
        controllerAs: 'Wind'
      })
      .when('/Komponenten/:id', {
        templateUrl: 'views/komponenten.html',
        controller: 'KomponentenCtrl',
        controllerAs: 'Komponenten'
      })
      .when('/Projekt', {
        templateUrl: 'views/projekt.html',
        controller: 'ProjektCtrl',
        controllerAs: 'Projekt'
      })
      .when('/ServiceTester', {
        templateUrl: 'views/servicetester.html',
        controller: 'ServicetesterCtrl',
        controllerAs: 'ServiceTester'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
