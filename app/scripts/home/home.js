'use strict';

angular.module('NeteGreek.home', [])
  .controller('HomeCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tooltips = {
      angular: 'Angular',
      boilerPlate: 'HTML5 Boilerplate',
      uiBootstrap: 'UI bootstrap',
      karma: 'Karma',
      lodash: 'angular-lodash',
      moment: 'angular-moment'
    };

    $scope.momentMessage = {
      time: new Date()
    };

    $scope.radioModel = 'Middle';
  });
