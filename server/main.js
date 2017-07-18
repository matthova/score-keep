import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  console.log('Server is started up');

  setInterval(() => {
    debugger;
    console.log('eyyy');
  }, 5000);
});
