'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/index');

  $stateProvider

      .state('index', {
        url: '/index',
        templateUrl: 'index.html'
      })

      .state('one', {
        url: '/one',
        templateUrl: 'constant/one.html'
      })

      .state('two', {
        url: '/two',
        templateUrl: 'constant/two.html'
      });

});