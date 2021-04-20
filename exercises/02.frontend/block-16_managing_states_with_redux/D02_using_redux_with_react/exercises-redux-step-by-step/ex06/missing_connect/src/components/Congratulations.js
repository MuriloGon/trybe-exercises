import React from 'react';
import MarioEPeach from '../imgs/marioepeach.png';
import TheMap from '../imgs/map.png';
import ThankYou from '../imgs/thankyou.gif';

class Congratulations extends React.Component {
  render() {
    return (
      <div className="success d-flex align-items-center justify-content-around">
        <div className="">
          <img src={ TheMap } alt="Mapa" height="250px" />
        </div>
        <div className="">
          <img className="love" src={ MarioEPeach } alt="Mario e Peach" height="400px" />
        </div>
        <div className="divGif">
          <img className="divGif" src={ ThankYou } alt="Thank You Gif" height="250px" />
        </div>
      </div>
    );
  }
}

export default Congratulations;
