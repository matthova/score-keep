import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

const renderPlayers = function(players = []) {
  return players.map(player => (
    <p key={player._id}>{player.name} has {player.score} point{Math.abs(Number(player.score)) === 1 ? '' : 's' }.</p>
  ));
};

const addPlayer = function() {
  Players.insert({
    name: `my name${new Date()}`,
    score: 0,
  });
}

Meteor.startup(function() {
  Tracker.autorun(function() {
    const players = Players.find().fetch();
    const playersDiv = renderPlayers(players);

    const title = 'Score Keep';
    let name = 'Meee';

    let jsx = (
      <div>
        <h1>{title}</h1>
        <button onClick={addPlayer}>Add a player</button>
        {playersDiv}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});