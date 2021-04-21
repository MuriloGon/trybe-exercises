import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  state = {
    mark: '',
    wasMarked: false,
  }

  changeMark = () => {
    const { currentPlayer } = this.props;
    this.setState({ mark: currentPlayer, wasMarked: true }, () => {
      this.props.changePlayer();
    });
  }

  renderMark = (mark) => {
    if (mark === 'X') return <img src={xImage} alt="X mark" />;
    if (mark === 'O') return <img src={oImage} alt="O mark" />;
    return "Erro";
  }

  render() {
    const { id } = this.props;
    const { mark, wasMarked } = this.state;
    return (
      <div onClick={wasMarked ? null : this.changeMark} data-testid={`cell_${id}`} className="game-cell"  >
        {mark !== '' ? this.renderMark(mark) : null}
      </div>
    );
  }
}

export default GameCell;
