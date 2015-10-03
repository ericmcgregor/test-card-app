'use strict'

angular.module('baseappApp')
.controller('ProjectEditCtrl', function($scope, $stateParams, $meteor, $mdSidenav, $mdComponentRegistry, $state) {
  $scope.project = $meteor.object(Projects, $stateParams.projectId);
  $meteor.subscribe('projects');

  $scope.isOpen = function() { return $mdSidenav('right').isOpen(); };
  $scope.$watch('isOpen()', function(value){
    if (value === false) {
      $state.go('^');
    }
  });

  $mdSidenav('right')
   .toggle()
   .then(function(){
    //  console.log($scope);
   });

});
