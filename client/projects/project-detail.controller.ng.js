'use strict'

angular.module('baseappApp')
.controller('ProjectDetailCtrl', function($scope, $meteor, $stateParams, $timeout ) {

  // $scope.project = project;
  $meteor.subscribe('projects').then( () => {
    $scope.spinner = false;
  });
  $scope.project = $meteor.object(Projects, $stateParams.projectId);

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
