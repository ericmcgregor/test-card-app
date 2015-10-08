'use strict'

angular.module('baseappApp')
.controller('ProjectsListCtrl', function($scope, $meteor) {

  $scope.projects = $meteor.collection(function() {
    return Projects.find({});
  });

});
