'use strict';

Meteor.methods({
  createHypothesis: function(projectId, name="new hypothesis") {
    let project = Projects.find(projectId);
    var hypothesi = {
        'projectId':projectId,
        'name': name,
        'test_version':0,
        'test':[
          {
            'version':0,
            'name':'test name',
            'assigned_to':'person',
            'deadline':'date',
            'duration':'time',
            'hypothesis':'we believe that...',
            'test':'to very this we will...',
            'metric':'to verify that we will...',
            'criteria':'we are right if...',
            'state':'backlog',
            'result':'unclear'
          }
        ],
        'learn':[
          {
            'version':0,
            'visible':false,
            'name':'test name',
            'assigned_to':'person',
            'deadline':'date',
            'duration':'time',
            'hypothesis':'we believe that...',
            'observation':'we observed...',
            'learning':'unclear results...',
            'next_steps':'continue on...',
            'result':'unclear'
          }
        ]
      }
      return Hypothesis.insert(hypothesi);

  }
});
