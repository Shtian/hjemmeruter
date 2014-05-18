'use strict';

angular.module('[gtfo]App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
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
