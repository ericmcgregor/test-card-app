'use strict'

angular.module('baseappApp')
.controller('ProjectsListCtrl', function($scope, $meteor) {
  $scope.page = 1
  $scope.perPage = 3
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1'
  
  $scope.projects = $meteor.collection(function() {
    return Projects.find({}, {sort:$scope.getReactively('sort')});
  });
  $meteor.autorun($scope, function() {
    $meteor.subscribe('projects', {
      limit: parseInt($scope.getReactively('perPage')),
      skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
      sort: $scope.getReactively('sort')
    }, $scope.getReactively('search')).then(function() {
      $scope.projectsCount = $meteor.object(Counts, 'numberOfProjects', false);
    });
  });
    
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.projects.save($scope.newProject);
      $scope.newProject = undefined;
    }
  };
      
  $scope.remove = function(project) {
    $scope.projects.remove(project);
  };
    
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
    
  $scope.$watch('orderProperty', function() {
    if($scope.orderProperty) {
      $scope.sort = {name_sort: parseInt($scope.orderProperty)};
    }
  });
});
        