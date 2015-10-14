'use strict';

angular.module('baseappApp')
.directive('navMenu', function($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/navMenu/nav-menu.view.ng.html',
    replace: true,
    scope:{},
    controller:function(){
      this.items = $meteor.collection( () => {
        return Projects.find();
      });
      $meteor.subscribe('projects');
    },
    controllerAs:'vm',
    link: function(scope, elem, attrs) {
        scope.addProject = function(){
          $meteor.call('createProject')
        }
    }
  };
});
