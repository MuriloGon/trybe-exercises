import React from 'react';
import saga from '../imgs/geminisaga.png';
import seiya from '../imgs/seiyafivesenses.png';

class HelpSeiya extends React.Component {
  constructor() {
    super();
    this.saga = this.saga.bind(this);
    this.seiya = this.seiya.bind(this);
  }

  saga() {
    return (
      <div className="left-box">
        <div className="d-flex flex-column align-items-center">
          <img
            src={ saga }
            width="400px"
            alt="Saga de Gêmeos"
          />
          <p className="left text-wrap">
            Como é possível que ele ainda tenha forças para se
            levantar?
          </p>
        </div>
      </div>
    );
  }

  seiya() {
    return (
      <div className="right-box">
        <div className="d-flex flex-column align-items-center">
          <img
            src={ seiya }
            width="400px"
            alt="Seiya de Pégasus"
          />
          <p className="text-wrap">
            Chegou a hora de lutar ou de morrer. Athena, por favor,
            deixe-me ver o inimigo... Me dê sua força, Pegasus!!!
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="help d-flex align-items-center justify-content-around">
        { this.saga() }
        { this.seiya() }
      </div>
    );
  }
}

export default HelpSeiya;
