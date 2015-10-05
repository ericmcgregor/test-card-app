'use strict';

Meteor.methods({
  createTestCard: function(hypothesiId) {
    console.log(hypothesiId)
    let hypothesi = Hypothesis.find(hypothesiId);

      let testCard = {
            'hypothesiId':hypothesiId,
            'name':'test name 1',
            'assigned_to':'person',
            'deadline':'date',
            'duration':'time',
            'hypothesis':hypothesi.name,
            'test':'to very this we will...',
            'metric':'to verify that we will...',
            'criteria':'we are right if...',
            'state':'backlog',
            'result':'unclear',
            'learning':{
              'observation':'we observed...',
              'learning':'unclear results...',
              'next_steps':'continue on...',
            }

          }


      return TestCard.insert(testCard);
  }
});
