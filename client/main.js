import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  debugger;
  let name = 'Meee';
  let jsx = <p>Cooool, {name}</p>;
  ReactDOM.render(jsx, document.getElementById('app'));
});