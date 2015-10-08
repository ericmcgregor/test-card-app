'use strict'

angular.module('baseappApp')
.controller('ProjectDetailCtrl', function($scope, $meteor, $stateParams, $timeout ) {

  // $scope.project = project;

    $scope.project = $meteor.object(Projects, $stateParams.projectId);
    $scope.spinner = false;
  // console.log('about to subscribe')
  // $meteor.subscribe('projects').then( (res) => {
  //   console.log('what?', res)
  //   $scope.spinner = false;
  // });

});
