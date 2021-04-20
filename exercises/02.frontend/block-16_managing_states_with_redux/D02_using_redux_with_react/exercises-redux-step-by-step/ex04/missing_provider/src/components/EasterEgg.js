import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EasterEgg extends React.Component {
  constructor() {
    super();
    this.showEasterEgg = this.showEasterEgg.bind(this);
  }

  showEasterEgg() {
    const video = 'https://www.youtube.com/watch?v=8sBIR_LvEMU';
    const videoEmbed = video.replace('watch?v=', 'embed/');

    return (
      <iframe
        title="battle-video"
        data-testid="video"
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="560"
        height="315"
        src={ videoEmbed }
      />
    );
  }

  render() {
    const { cosmo } = this.props;
    const fullPower = 100;

    return (
      <div className="help d-flex flex-column align-items-center justify-content-around">
        <h1>Easter Egg</h1>
        { cosmo === fullPower ? this.showEasterEgg() : <span>Easter Egg</span> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cosmo: state.defeatSaga.cosmo,
});

EasterEgg.propTypes = {
  cosmo: PropTypes.number,
};

EasterEgg.defaultProps = {
  cosmo: 0,
};

export default connect(mapStateToProps, null)(EasterEgg);
