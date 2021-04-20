import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import returnImg from '../imgs/return.png';

class Omega extends React.Component {
  render() {
    return (
      <div className="omega-div d-flex flex-column align-items-center">
        <Card />
        <Link to="/">
          <img src={ returnImg } height="50px" alt="Botão retornar" />
        </Link>
      </div>
    );
  }
}

export default Omega;
