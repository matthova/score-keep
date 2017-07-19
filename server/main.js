import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

Meteor.startup(function () {
  const user = {
    name: 'Kaitlyn',
    sayHi () {
      setTimeout(() => {
        console.log(this.name);
      }, 1000);
    }
  }

  user.sayHi(1, 2);

});