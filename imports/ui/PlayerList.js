import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayerList extends React.Component {
  render() {
    return (
      <div>
        {this.props.players.map(player => <Player key={player._id} player={player}/>)}
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};