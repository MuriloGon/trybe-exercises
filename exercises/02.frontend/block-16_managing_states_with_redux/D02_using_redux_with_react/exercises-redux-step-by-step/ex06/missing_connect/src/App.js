import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RescuePeach from './components/RescuePeach';
import Congratulations from './components/Congratulations';

class App extends React.Component {
  render() {
    const { status } = this.props;

    return (
      <div className="mario-background d-flex flex-row">
        { status === 'successful_rescue' ? <Congratulations /> : <RescuePeach /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.beatTheGame.status,
});

App.propTypes = {
  status: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(App);
