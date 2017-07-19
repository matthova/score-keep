import React from 'react';

import { Players } from './../api/players';

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

export default class AddPlayer extends React.Component {
  render() {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="playerName" placeholder="Player Name"/>
        <button>Add Player</button>
      </form>
    );
  }
}