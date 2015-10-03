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
    views:{
      "@":{
        templateUrl: 'client/projects/project-detail.view.ng.html',
        controller: 'ProjectDetailCtrl'
      }
    }
  })
  .state('projects.detail.edithypothesis', {
    url: '/edit/hypothesis/:itemId',
    views:{
      "sidenav-right@":{
        template: function(params){
          return '<create-hypothesis-form item-id="'+params.itemId+'"></create-hypothesis-form>';
        },
        controller: 'ProjectEditCtrl'
      }
    }
  })
  .state('projects.detail.edittest', {
    url: '/edit/test/:itemId',
    views:{
      "sidenav-right@":{
        template: function(params){
          return '<create-test-form item-id="'+params.itemId+'"></create-test-form>';
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
