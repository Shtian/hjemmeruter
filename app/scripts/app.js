'use strict';

angular.module('[gtfo]App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'directives',
  'services'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
