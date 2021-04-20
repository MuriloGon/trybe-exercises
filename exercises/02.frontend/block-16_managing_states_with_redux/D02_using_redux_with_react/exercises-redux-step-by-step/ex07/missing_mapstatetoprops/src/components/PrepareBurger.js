import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import burger from '../imgs/hamburguer.png';
import uniform from '../imgs/siriCascudoUniforme.png';

class PrepareBurger extends React.Component {
  render() {
    const { receiveRecipe } = this.props;

    return (
      <div className="d-flex flex-column align-items-center">
        <img src={ burger } alt="Hambúrguer de Siri" height="100px" width="100px" />
        <h2>Modo de preparo</h2>
        <div>
          { receiveRecipe.map(
            (element, index) => <span key={ index }>{ element }</span>,
          ) }
        </div>
        <img src={ uniform } alt="Boné Siri Cascudo" height="100px" width="100px" />
      </div>
    );
  }
}

PrepareBurger.propTypes = {
  receiveRecipe: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  receiveRecipe: state.spiedRecipe.recipe,
});

export default connect(mapStateToProps, null)(PrepareBurger);
