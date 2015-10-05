'use strict'

angular.module('baseappApp')
.controller('ProjectDetailCtrl', function($scope, $meteor, project, $stateParams, $timeout ) {

  $scope.project = project;
  $meteor.subscribe('projects').then(function(){
  });
  // $scope.project = $meteor.object(Projects, $stateParams.projectId);
  // console.log($scope.project)
  // $meteor.subscribe('projects').then(function(){
  //   $timeout(function(){
  //     $scope.spinner = false;
  //
  //   }, 500);
  // });

  $scope.spinner = false;

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
