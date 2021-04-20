import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Matrix from './components/Matrix';
import Gif from './components/Gif';

class App extends React.Component {
  render() {
    const { pill } = this.props;

    return (
      <div className="matrix-background">
        { pill ? <Gif /> : <Matrix /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pill: state.selectedPill.id,
});

App.propTypes = {
  pill: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(App);
