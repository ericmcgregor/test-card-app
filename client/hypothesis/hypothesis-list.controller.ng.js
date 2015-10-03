'use strict'

angular.module('baseappApp')
.controller('HypothesisListCtrl', function($scope, $meteor) {
  $scope.page = 1
  $scope.perPage = 3
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1'
  
  $scope.hypothesis = $meteor.collection(function() {
    return Hypothesis.find({}, {sort:$scope.getReactively('sort')});
  });
  $meteor.autorun($scope, function() {
    $meteor.subscribe('hypothesis', {
      limit: parseInt($scope.getReactively('perPage')),
      skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
      sort: $scope.getReactively('sort')
    }, $scope.getReactively('search')).then(function() {
      $scope.hypothesisCount = $meteor.object(Counts, 'numberOfHypothesis', false);
    });
  });
    
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.hypothesis.save($scope.newHypothesi);
      $scope.newHypothesi = undefined;
    }
  };
      
  $scope.remove = function(hypothesi) {
    $scope.hypothesis.remove(hypothesi);
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
        