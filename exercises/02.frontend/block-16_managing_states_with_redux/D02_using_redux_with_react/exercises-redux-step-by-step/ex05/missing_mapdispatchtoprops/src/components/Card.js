import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import elixir from '../imgs/elixir.jpg';
import exodus from '../imgs/exodus.jpg';
import franklinRichards from '../imgs/franklinrichards.jpg';
import homemDeGelo from '../imgs/homemdegelo.jpg';
import hopeSummers from '../imgs/hopesummers.jpg';
import jamieBraddock from '../imgs/jamiebraddock.jpg';
import jeanGrey from '../imgs/jeangrey.jpg';
import legiao from '../imgs/legiao.jpeg';
import magneto from '../imgs/magneto.jpg';
import misterM from '../imgs/misterm.jpg';
import proteus from '../imgs/proteus.jpg';
import quentinQuire from '../imgs/quentinquire.jpg';
import tempestade from '../imgs/tempestade.jpg';
import vulcano from '../imgs/vulcano.jpg';
import { mutantsInfo, omegaPower } from '../data';

class Card extends React.Component {
  constructor() {
    super();
    this.selectMutantImg = this.selectMutantImg.bind(this);
    this.selectMutantInfo = this.selectMutantInfo.bind(this);
    this.selectMutantPower = this.selectMutantPower.bind(this);
  }

  selectMutantImg() {
    const { mutant } = this.props;
    switch (mutant) {
    case 'Hope Summers (Hope)':
      return (hopeSummers);
    case 'Gabriel Summers (Vulcano)':
      return (vulcano);
    case 'Franklin Richards':
      return (franklinRichards);
    case 'Quentin Quire (Kid Ômega)':
      return (quentinQuire);
    case 'Bennet du Paris (Exodus)':
      return (exodus);
    case 'Ororo Munroe (Tempestade)':
      return (tempestade);
    case 'Absalon Mercator (Mister M)':
      return (misterM);
    case 'Kevin MacTaggert (Proteus)':
      return (proteus);
    case 'Erik Lehnsherr (Magneto)':
      return (magneto);
    case 'David Haller (Legião)':
      return (legiao);
    case 'Jean Grey':
      return (jeanGrey);
    case 'Joshua Foley (Elixir)':
      return (elixir);
    case 'Robert Drake (Homem de Gelo)':
      return (homemDeGelo);
    case 'Jamie Braddock (Monarca)':
      return (jamieBraddock);
    default:
      return '';
    }
  }

  selectMutantInfo() {
    const SUBSTRING_START = 0;
    const SUBSTRING_END = 4;
    const { mutant } = this.props;
    const selected = mutant
      .substring(SUBSTRING_START, SUBSTRING_END).toLowerCase();
    return (mutantsInfo[selected]);
  }

  selectMutantPower() {
    const SUBSTRING_START = 0;
    const SUBSTRING_END = 4;
    const { mutant } = this.props;
    const selected = mutant
      .substring(SUBSTRING_START, SUBSTRING_END).toLowerCase();
    return (omegaPower[selected]);
  }

  render() {
    return (
      <div
        className="mutant-card d-flex flex-column align-items-center
        justify-content-center bg-light"
      >
        <img
          src={ this.selectMutantImg() }
          width="200px"
          height="150px"
          alt="Mutante Selecionado"
        />
        <h3>Informações do Mutante</h3>
        <p>{ this.selectMutantInfo() }</p>
        <h3>Poder Ômega</h3>
        <p>{ this.selectMutantPower() }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mutant: state.mutantChosen.mutant,
});

Card.propTypes = {
  mutant: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Card);
