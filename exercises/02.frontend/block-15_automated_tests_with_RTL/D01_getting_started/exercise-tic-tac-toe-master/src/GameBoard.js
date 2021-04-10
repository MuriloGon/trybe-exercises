import React from 'react';
import GameCell from './GameCell';
import PropTypes from 'prop-types';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const { currentPlayer } = this.props;
    return (
      <div className="game-board">
        {this.props.gameState.map((playerId, i) => (
          <GameCell changePlayer={this.props.changePlayer} currentPlayer={ currentPlayer } key={i} id={i} />
        ))}
      </div>
    );
  }
}

export default GameBoard;
