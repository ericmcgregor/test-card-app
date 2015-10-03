'use strict'

angular.module('baseappApp')
.config(function($stateProvider) {
  $stateProvider
  .state('hypothesis-list', {
    url: '/hypothesis',
    templateUrl: 'client/hypothesis/hypothesis-list.view.ng.html',
    controller: 'HypothesisListCtrl'
  })
  .state('hypothesi-detail', {
    url: '/hypothesis/:hypothesiId',
    templateUrl: 'client/hypothesis/hypothesi-detail.view.ng.html',
    controller: 'HypothesiDetailCtrl'
  });
});