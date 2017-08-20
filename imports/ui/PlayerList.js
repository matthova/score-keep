import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length > 0) {
      return this.props.players.map(player => <Player key={player._id} player={player} />);
    }

    return (
      <div className="item">
        <p>Add your first player</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};
