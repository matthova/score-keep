import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const removePlayer = () => {

};

const renderPlayers = (players = []) => {
  return players.map(player => (
    <div key={player._id}>
      <p>{player.name} has {player.score} point{Math.abs(Number(player.score)) === 1 ? '' : 's' }.</p>
      <button onClick={() => {
        Players.update(player._id, {$inc: {score: 1}})
      }}>+1</button>
      <button onClick={() => {
        Players.update(player._id, {$inc: {score: -1}})
      }}>-1</button>
      <button onClick={() => Players.remove({ _id: player._id })}>X</button>
    </div>
  ));
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const playersDiv = renderPlayers(players);

    const title = 'Score Keep';
    let name = 'Meee';

    let jsx = (
      <div>
        <TitleBar title="Score Keep" subtitle="Created by Matt Hova"/>
        <AddPlayer/>
        {playersDiv}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});