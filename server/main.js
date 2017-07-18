import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function () {
  console.log('players list', Players.find().fetch());

  // Players.insert({
  //   name: 'Jim',
  //   score: 2,
  // });
  // console.log(Players.find().fetch());
});