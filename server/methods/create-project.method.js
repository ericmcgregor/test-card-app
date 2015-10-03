'use strict';

Meteor.methods({
  createProject: function(name) {

    let projectId = Projects.insert({name:name});

    Meteor.call('createHypothesis', projectId, name);

    return projectId;
  }
});
