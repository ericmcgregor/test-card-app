'use strict';

Meteor.methods({
  createLearning: function(testCardId) {
    let testCard = TestCard.findOne(testCardId);

      let learning = {
            'testCardId':testCard._id,
            'hypothesiId':testCard.hypothesiId,
            'hypothesis':testCard.hypothesis,
            'observation':'we observed...',
            'learning':'unclear results...',
            'next_steps':'continue on...',
            'result':'unclear'
          }

    let learningId = Learnings.insert(learning);
    console.log('learning:'+learningId);
    return learningId;
  }
});
