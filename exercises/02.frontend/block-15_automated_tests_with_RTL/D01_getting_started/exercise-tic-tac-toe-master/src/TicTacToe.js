import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 0,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  getCurrentPlayer = () => {
    const { activePlayer } = this.state;
    return activePlayer ? 'O' : 'X';
  };

  changeCurrentPlayer = () => {
    const { activePlayer } = this.state;

    if (activePlayer === 1) this.setState({ activePlayer: 0 });
    else this.setState({ activePlayer: 1 });
  };

  render() {
    return (
      <>
        <h3>
          Current player: {this.getCurrentPlayer()}
        </h3>
        <GameBoard
          changePlayer={this.changeCurrentPlayer}
          currentPlayer={this.getCurrentPlayer()}
          gameState={this.state.gameBoard} />
      </>
    );
  }
}

export default TicTacToe;
