import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpSeiya from './components/HelpSeiya';
import { getCosmo } from './actions';
import EasterEgg from './components/EasterEgg';

class App extends React.Component {
  constructor() {
    super();
    this.handleProgress = this.handleProgress.bind(this);
    this.history = this.history.bind(this);
    this.state = {
      progress: 0,
    };
  }

  componentDidUpdate() {
    const { progress } = this.state;
    const { sendCosmo } = this.props;
    const oneHundred = 100;
    if (progress === oneHundred) {
      sendCosmo(progress);
    }
  }

  handleProgress() {
    let { progress } = this.state;
    const increment = 10;
    progress += increment;
    this.setState({ progress });
  }

  history() {
    const { progress } = this.state;
    const showProgress = `${progress} %` || '0 %';

    return (
      <div className="d-flex flex-column">
        <HelpSeiya />
        <p className="important d-flex align-self-center">
          Seiya está sem seus cinco sentidos e precisa do
          seu cosmo para conseguir derrotar Saga controlado
          pelo seu lado malígno.
        </p>
        <div
          className="rox d-flex flex-row
          justify-content-center align-items-center"
        >
          <span>{ showProgress }</span>
          <button
            className="btn btn-warning"
            type="button"
            onClick={ this.handleProgress }
            onKeyUp={ this.handleProgress }
          >
            Empreste seu cosmo
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { progress } = this.state;
    const fullPower = 100;

    return (
      <div className="seiya-background d-flex flex-column">
        { progress === fullPower
          ? <EasterEgg />
          : this.history() }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendCosmo: (cosmo) => dispatch(getCosmo(cosmo)),
});

App.propTypes = {
  sendCosmo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
