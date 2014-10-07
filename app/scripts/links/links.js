'use strict';

angular.module('NeteGreek.links', [])
  .controller('LinksCtrl', function ($scope, links, otherLinks) {
    $scope.links = links;
    $scope.otherLinks= otherLinks;
  });

