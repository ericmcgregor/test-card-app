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
    // resolve:{
    //   project:function($meteor, $stateParams){
    //       return $meteor.object(Projects, $stateParams.projectId);
    //   }
    // },
    views:{
      "@":{
        templateUrl: 'client/projects/project-detail.view.ng.html',
        controller: 'ProjectDetailCtrl'
      }
    }
  })


  .state('projects.detail.hypothesis', {
    url: '/hypothesis/:hypothesiId',
    views:{
      "sidenav-right@":{
        template: function(params){
          return '<tc-edit-hypothesis-menu hypothesi-id="'+params.hypothesiId+'"></tc-edit-hypothesis-menu>';
        },
        controller: 'ProjectEditCtrl'
      }
    }
  })
  .state('projects.detail.hypothesis.edit', {
    url: '/edit',
    views:{
      "sidenav-right@":{
        template: function(params){
          return '<tc-edit-hypothesis-form hypothesi-id="'+params.hypothesiId+'"></tc-edit-hypothesis-form>';
        },
        // templateUrl:'client/components/tcEditHypothesis/tc-edit-hypothesis.edit.ng.html',
        controller: 'ProjectEditCtrl',
        controllerAs:"vm"
      }
    }
  })





  .state('projects.detail.testcard', {
    url: '/testcard/:testCardId',
    params:{
      state:undefined,
      next:null,
      prev:null
    },
    views:{
      "sidenav-right@":{
        // params:['state', 'next', 'prev'],
        template: function(params){
          console.log(params)
          return `<tc-edit-test-card-menu
          testcard-id="${params.testCardId}"
          state="${params.state}"
          next="${params.next}"
          prev="${params.prev}">
          </tc-edit-test-card-menu>`;
        },
        controller: 'ProjectEditCtrl'
      }
    }
  })

  .state('projects.detail.testcard.edit', {
    url: '/testcard/:testCardId/edit',
    views:{
      "sidenav-right@":{
        // params:['state', 'next', 'prev'],
        template: function(params){
          console.log(params)
          return `<tc-edit-test-card-form testcard-id="${params.testCardId}"></tc-edit-test-card-menu>`;
        },
        controller: 'ProjectEditCtrl'
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
