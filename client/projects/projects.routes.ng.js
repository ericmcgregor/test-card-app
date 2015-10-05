'use strict'

angular.module('baseappApp')
.config(function($stateProvider) {
  $stateProvider
  .state('projects', {
    url: '/projects',
    templateUrl: 'client/projects/projects-list.view.ng.html',
    controller: 'ProjectsListCtrl'
  })
  .state('projects.detail', {
    url: '/:projectId',
    resolve:{
      project:function($meteor, $stateParams){
        $meteor.subscribe('projects');
        return $meteor.object(Projects, $stateParams.projectId);
      }
    },
    views:{
      "@":{
        templateUrl: 'client/projects/project-detail.view.ng.html',
        controller: 'ProjectDetailCtrl'
      }
    }
  })
  .state('projects.detail.edithypothesis', {
    url: '/edit/hypothesis/:hypothesiId',
    views:{
      "sidenav-right@":{
        template: function(params){
          return '<create-hypothesis-form item-id="'+params.hypothesiId+'"></create-hypothesis-form>';
        },
        controller: 'ProjectEditCtrl'
      }
    }
  })
  .state('projects.detail.edittestcard', {
    url: '/edit/test/:testCardId',
    views:{
      "sidenav-right@":{
        template: function(params){
          return '<create-test-form item-id="'+params.testCardId+'"></create-test-form>';
        },
        controller: 'ProjectEditCtrl'
      }
    }
  })
  .state('projects.detail.editlearning', {
    url: '/edit/learning/:itemId',
    views:{
      "sidenav-right@":{
        template: function(params){
          return '<create-learning-form item-id="'+params.itemId+'"></create-learning-form>';
        },
        controller: 'ProjectEditCtrl'
      }
    }
  })
  ;
});
