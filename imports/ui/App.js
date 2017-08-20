import React from 'react';
import PropTypes from 'prop-types';

import PlayerList from './PlayerList';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} />
        <div className="wrapper">
          <AddPlayer />
          <PlayerList players={this.props.players} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
