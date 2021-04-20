import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { rescuePlan } from '../actions';
import SuperMarioWorld from '../imgs/supermarioworld.png';
import Mario from '../imgs/mario.png';
import Peach from '../imgs/peach.png';

class RescuePeach extends React.Component {
  componentDidMount() {
    const { congratulations } = this.props;
    const RESCUE_TIME = 14000;
    setTimeout(() => {
      congratulations('successful_rescue');
    }, RESCUE_TIME);
  }

  render() {
    return (
      <div>
        <div className="rescue d-flex align-items-center justify-content-center">
          <img src={ SuperMarioWorld } alt="Super Mario World" width="60%" />
        </div>
        <div className="rescue d-flex align-items-center justify-content-around">
          <img className="firstImg" src={ Mario } alt="Mario" height="200px" />
          <img src={ Peach } alt="Peach" height="180px" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  congratulations: (status) => dispatch(rescuePlan(status)),
});

RescuePeach.propTypes = {
  congratulations: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(RescuePeach);
