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

const handleSubmit = function(e) {
  e.preventDefault();
  const playerName = e.target.playerName.value;
  if (playerName) {
    e.target.playerName.value = '';

    Players.insert({
      name: playerName,
      score: 0,
    });
  }
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
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
        {playersDiv}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});