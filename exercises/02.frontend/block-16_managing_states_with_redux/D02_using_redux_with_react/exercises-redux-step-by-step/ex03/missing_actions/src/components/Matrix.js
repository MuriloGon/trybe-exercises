import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { understandMatrix } from '../actions';
import bluepill from '../imgs/blue-pill.png';
import redpill from '../imgs/red-pill.png';
import abstract from '../data';

class Matrix extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { takePill } = this.props;
    const chosenPill = target.id;
    takePill(chosenPill);
  }

  render() {
    return (
      <div className="matrix-main">
        { abstract.map((paragraph) => (<p key={ paragraph }>{ paragraph }</p>)) }
        <h1>Escolha a sua pílula</h1>
        <div>
          <button
            className="pill"
            type="button"
            onClick={ this.handleClick }
          >
            <img id="blue" src={ bluepill } height="30px" alt="blue pill" />
          </button>
          <button
            className="pill"
            type="button"
            onClick={ this.handleClick }
          >
            <img id="red" src={ redpill } height="30px" alt="red pill" />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  takePill: (id) => dispatch(understandMatrix(id)),
});

Matrix.propTypes = {
  takePill: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Matrix);
