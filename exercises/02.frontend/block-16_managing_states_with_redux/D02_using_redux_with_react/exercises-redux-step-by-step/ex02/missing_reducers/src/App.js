import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import DragonBall from './components/DragonBall';
import genkidama from './imgs/genkidama.gif';

class App extends React.Component {
  render() {
    const { africa, america, antarctica, asia, europe, oceania } = this.props;
    const totalPopulationOfTheWorld = africa + america + antarctica
      + asia + europe + oceania;
    const MAX_PERCENTAGE = 100;
    return (
      <div className="dragonball-background">
        <DragonBall />
        <div className="genkidama">
          { totalPopulationOfTheWorld === MAX_PERCENTAGE
            ? (
              <img
                src={ genkidama }
                height="300px"
                width="530px"
                alt="Gif Goku Genki Dama"
              />
            )
            : ''}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  africa: state.Africa.percentage,
  america: state.America.percentage,
  antarctica: state.Antarctica.percentage,
  asia: state.Asia.percentage,
  europe: state.Europe.percentage,
  oceania: state.Oceania.percentage,
});

App.propTypes = {
  africa: PropTypes.number.isRequired,
  america: PropTypes.number.isRequired,
  antarctica: PropTypes.number.isRequired,
  asia: PropTypes.number.isRequired,
  europe: PropTypes.number.isRequired,
  oceania: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(App);
