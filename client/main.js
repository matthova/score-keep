import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import PlayerList from './../imports/ui/PlayerList';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();

    let jsx = (
      <div>
        <TitleBar title="Score Keep" subtitle="Created by Matt Hova"/>
        <AddPlayer/>
        <PlayerList players={players}/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});