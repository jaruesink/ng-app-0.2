'use strict';

angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'angularMoment',
    'angular-lodash',
    'templates.app',
    'NeteGreek.links',
    'NeteGreek.home',
    'NeteGreek.http',
    'NeteGreek.navigation'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /main
    $urlRouterProvider.otherwise('/home');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      })
      .state('links', {
        url: '/links',
        resolve: {
          links: function(httpLinks) {
            return httpLinks.getLinks();
          },
          otherLinks: function(httpOtherLinks) {
            return httpOtherLinks.getOtherLinks();
          }
        },
        controller: 'LinksCtrl',
        templateUrl: 'links/links.tpl.html'
      });
  })
  .run(function($rootScope, $state) {
    // Makes for easily determining what state is being shown
    $rootScope.state = $state;
  });
