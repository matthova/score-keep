import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

const removePlayer = () => {

};

const renderPlayers = (players = []) => {
  return players.map(player => (
    <div key={player._id}>
      <p>{player.name} has {player.score} point{Math.abs(Number(player.score)) === 1 ? '' : 's' }.</p>
      <button onClick={() => Players.remove({ _id: player._id })}>X</button>
    </div>
  ));
};

const handleSubmit = (e) => {
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

Meteor.startup(() => {
  Tracker.autorun(() => {
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