import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [
  {
    name: 'Kaitlyn',
    score: 100,
    _id: '1',
  },
  {
    name: 'Matthew',
    score: -1,
    _id: '2',
  },
  {
    name: 'Peter',
    score: 50,
    _id: '3',
  },
];

const renderPlayers = function(players = []) {
  return players.map(player => (
    <p key={player._id}>{player.name} has {player.score} point{Math.abs(Number(player.score)) === 1 ? '' : 's' }.</p>
  ));
};

Meteor.startup(function() {
  const title = 'Score Keep';
  let name = 'Meee';

  let jsx = (
    <div>
      <h1>{title}</h1>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});