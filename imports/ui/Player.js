import React from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

export default class Player extends React.Component {
  pluralizeScore() {
    return `point${Math.abs(Number(this.props.player.score)) === 1 ? '' : 's'}`;
  }
  render() {
    return (
      <div>
        <p>
          {this.props.player.name} has {this.props.player.score} {this.pluralizeScore()}.
        </p>
        <button
          onClick={() => {
            Players.update(this.props.player._id, { $inc: { score: 1 } });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            Players.update(this.props.player._id, { $inc: { score: -1 } });
          }}
        >
          -1
        </button>

        <button onClick={() => Players.remove({ _id: this.props.player._id })}>X</button>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
};
