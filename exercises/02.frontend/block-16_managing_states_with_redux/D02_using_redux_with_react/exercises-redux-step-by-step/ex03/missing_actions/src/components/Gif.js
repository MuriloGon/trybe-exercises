import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import john from '../imgs/john-wick.gif';
import neo from '../imgs/neo.gif';

class Gif extends React.Component {
  render() {
    const { pill } = this.props;

    return (
      <div className="d-flex align-items-center justify-content-center">
        { pill === 'red'
          ? (
            <div className="matrix-main">
              <img src={ neo } height="300px" alt="Neo Matrix" />
            </div>
          )
          : (
            <div className="matrix-main">
              <img src={ john } height="300px" alt="John Wick" />
            </div>
          )}
      </div>
    );
  }
}

Gif.propTypes = {
  pill: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  pill: state.selectedPill.id,
});

export default connect(mapStateToProps, null)(Gif);
