'use strict'

angular.module('baseappApp')
.controller('HypothesiDetailCtrl', function($scope, $stateParams, $meteor) {
  $scope.hypothesi = $meteor.object(Hypothesis, $stateParams.hypothesiId);
  $meteor.subscribe('hypothesis');
  
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.hypothesi.save().then(
        function(numberOfDocs) {
          console.log('save successful, docs affected ', numberOfDocs);
        },
        function(error) {
          console.log('save error ', error);
        }
      )
    }
  };
        
  $scope.reset = function() {
    $scope.hypothesi.reset();
  };
});