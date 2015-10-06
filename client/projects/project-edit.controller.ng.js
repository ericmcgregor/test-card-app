'use strict'

angular.module('baseappApp')
.controller('ProjectEditCtrl', function($scope, $stateParams, $meteor, $mdSidenav, $mdComponentRegistry, $state) {
  $scope.isOpen = function() { return $mdSidenav('right').isOpen(); };

  $scope.$watch('isOpen()', function(value){
    if (value === false) {
      $state.go('projects.detail', {projectId:$stateParams.projectId});
    }
  });

  $mdSidenav('right')
   .open()
   .then(function(){
    //  console.log($scope);
   });

});
