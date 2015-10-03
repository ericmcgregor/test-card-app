Meteor.startup(function() {
  if(Projects.find().count() === 0) {
    var projects = [
      {
        'name': 'project 1'
      },
      {
        'name': 'project 2'
      }
    ];
    projects.forEach(function(project) {
      Meteor.call('createProject', project.name);
    });
  }
});
