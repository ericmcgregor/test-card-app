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
      .state('projects.detail.editPeople', {
        url: '/edit/people',
        params:{
          testCard:undefined,
        },
        views:{
          "sidenav-right@":{
            template: function(params){
              return '<tc-edit-people test-card="'+params.testCard+'"></tc-edit-people>';
            },
            controller: 'ProjectEditCtrl'
          }
        }
      })
  ;
});
