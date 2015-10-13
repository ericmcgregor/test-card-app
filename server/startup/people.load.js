Meteor.startup(function() {
  if(People.find().count() === 0) {
    var people = [
      {
        'name': 'person 1',
        'image':faker.image.avatar()
      },
      {
        'name': 'person 2',
        'image':faker.image.avatar()
      },
      {
        'name': 'person 3',
        'image':faker.image.avatar()
      }
    ];
    people.forEach(function(person) {
      People.insert(person);
    });
  }
});
