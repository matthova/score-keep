import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';
import Player from './../imports/ui/Player';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (players = []) => {
  return players.map(player => <Player key={player._id} player={player}/>);
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const playersDiv = renderPlayers(players);

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