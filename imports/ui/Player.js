import React from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

export default class Player extends React.Component {
  pluralizeScore() {
    return `point${Math.abs(Number(this.props.player.score)) === 1 ? '' : 's'}`;
  }
  render() {
    const itemClassName = `item item--position-${this.props.player.rank}`;

    return (
      <div className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">
              {this.props.player.name}
            </h3>
            <p className="player__stats">
              {this.props.player.position} place - {this.props.player.score} {this.pluralizeScore()}.
            </p>
          </div>
          <div className="player__actions">
            <button
              className="button button--round"
              onClick={() => {
                Players.update(this.props.player._id, { $inc: { score: 1 } });
              }}
            >
              +1
            </button>
            <button
              className="button button--round"
              onClick={() => {
                Players.update(this.props.player._id, { $inc: { score: -1 } });
              }}
            >
              -1
            </button>

            <button
              className="button button--round"
              onClick={() => Players.remove({ _id: this.props.player._id })}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
};
