import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length > 0) {
      return this.props.players.map(player => <Player key={player._id} player={player} />);
    }

    return (
      <div className="item">
        <p className="item__message item__message--empty">Add your first player</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <FlipMove duration={400} maintainContainerHeight>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};
