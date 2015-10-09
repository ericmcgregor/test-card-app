'use strict'

Meteor.publish('testCard', function(options, searchString) {
  if(!searchString) {
    searchString = '';
  }
  Counts.publish(this, 'numberOfTestCard', TestCard.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }), {noReady: true});
  return TestCard.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }, options);
});


TestCard.after.remove(function(userId, testCard){
  Learnings.remove({testCardId:testCard._id});
});
