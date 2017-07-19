import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

Meteor.startup(function () {
  class Person {
    constructor(name, age = -1) {
      this.name = name
      this.age = age;
    }
    getGreeting() {
      return `Hi!, I am ${this.name}.`;
    }

    getPersonDescription() {
      return `${this.name} is ${this.age} years old.`;
    }
  }

  class Employee extends Person {
    constructor(name, age = -1, title) {
      super(name, age);
      this.title = title;
    }

    getGreeting() {
      if (this.title) {
        return `Hi! I am ${this.name}. I work as a ${this.title}.`
      } else {
        return super.getGreeting();
      }
    }

    hasJob() {
      return !!this.title;
    }
  }

  class Programmer extends Person {
    constructor(name, age = -1, preferredLanguage) {
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }

    getGreeting() {
      if (this.preferredLanguage) {
        return `Hi! I am ${this.name}. My preferred language is ${this.preferredLanguage}.`
      } else {
        return super.getGreeting();
      }
    }
  }

  let me = new Employee('Bob', 20, 'Assistant to the general manager');
  let andrew = new Employee('Andrew', 30);
  let programmer = new Programmer('Kaitlyn', 28, 'ror');
  console.log(me.getPersonDescription());
  console.log(me.hasJob());
  console.log(andrew.hasJob());
  console.log(me.getGreeting());
  console.log(andrew.getGreeting());
  console.log(programmer.getGreeting());
});