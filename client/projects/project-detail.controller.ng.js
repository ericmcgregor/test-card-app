'use strict'

angular.module('baseappApp')
.controller('ProjectDetailCtrl', function($scope, $stateParams, $meteor, $timeout) {
  $scope.project = $meteor.object(Projects, $stateParams.projectId);

  $meteor.subscribe('projects').then(function(){
    $timeout(function(){
      $scope.spinner = false;

    }, 500);
  });


  $scope.spinner = true;

  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.project.save().then(
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
    $scope.project.reset();
  };
});
