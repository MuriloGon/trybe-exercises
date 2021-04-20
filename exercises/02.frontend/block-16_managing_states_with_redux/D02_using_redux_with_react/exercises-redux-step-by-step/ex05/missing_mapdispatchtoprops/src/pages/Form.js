import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showMutant } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      mutant: '',
    };
  }

  handleSubmit() {
    const { history, selectedOmega } = this.props;
    const { mutant } = this.state;
    selectedOmega(mutant);
    history.push('/omega');
  }

  handleChange({ target }) {
    this.setState({
      mutant: target.value,
    });
  }

  createMutantOptions() {
    const omegaLevelMutants = ['Hope Summers (Hope)', 'Gabriel Summers (Vulcano)',
      'Franklin Richards', 'Quentin Quire (Kid Ômega)', 'Bennet du Paris (Exodus)',
      'Ororo Munroe (Tempestade)', 'Absalon Mercator (Mister M)',
      'Kevin MacTaggert (Proteus)', 'Erik Lehnsherr (Magneto)',
      'David Haller (Legião)', 'Jean Grey', 'Joshua Foley (Elixir)',
      'Robert Drake (Homem de Gelo)', 'Jamie Braddock (Monarca)'];
    const sortedOmegaMutants = omegaLevelMutants.sort();
    const SUBSTRING_START = 0;
    const SUBSTRING_END = 4;

    return (
      sortedOmegaMutants.map((mutant, index) => (
        <option
          key={ index }
          data-id={ mutant.substring(SUBSTRING_START, SUBSTRING_END).toLowerCase() }
        >
          { mutant }
        </option>
      ))
    );
  }

  createSubmitButtonContainer() {
    return (
      <div className="input-group-append">
        <button
          className="btn btn-outline-light"
          type="submit"
        >
          Selecionar
        </button>
      </div>
    );
  }

  render() {
    return (
      <div
        className="form-mutant d-flex flex-column align-items-center
      justify-content-center"
      >
        <div
          className="mutant-input d-flex flex-column align-items-center
        justify-content-center"
        >
          <h2 className="text-white">Selecione o mutante nível Ômega</h2>
          <form onSubmit={ this.handleSubmit }>
            <div className="d-flex">
              <select className="custom-select" onChange={ this.handleChange }>
                { this.createMutantOptions() }
              </select>
              { this.createSubmitButtonContainer() }
            </div>
          </form>
          <p className="intro">
            Nível Ômega: Habilidade super desenvolvida que alcançou
            um nível insuperável na classificação da habilidade.
          </p>
        </div>

      </div>
    );
  }
}

Form.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  selectedOmega: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  selectedOmega: (value) => dispatch(showMutant(value)),
});

export default connect(null, mapDispatchToProps)(Form);
