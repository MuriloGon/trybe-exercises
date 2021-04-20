import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendAfricaEnergy, sendAmericaEnergy, sendAntarcticaEnergy,
  sendAsiaEnergy, sendEuropeEnergy, sendOceaniaEnergy } from '../actions';
import gokuxfreeza from '../imgs/gokuxfreeza.jpeg';

class Dragonball extends React.Component {
  constructor() {
    super();
    this.startCountDown = this.startCountDown.bind(this);
    this.state = {
      timer: '',
    };
  }

  componentDidMount() {
    this.startCountDown();
  }

  startCountDown() {
    const milliseconds = 30000;
    const convertNumber = 1000;
    const minuteSeconds = 60;
    const updateTime = 1000;
    const countDownSeconds = new Date().getTime() + milliseconds;
    const startSeconds = (countDownSeconds - new Date().getTime()) / convertNumber;
    this.setState({
      timer: startSeconds,
    });
    const updateTimerWithOneSecond = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDownSeconds - now;
      const seconds = Math.ceil((gap % (convertNumber * minuteSeconds)) / convertNumber);
      this.setState({
        timer: seconds,
      });

      const ZERO_SECONDS = 0;

      if (gap <= ZERO_SECONDS) {
        clearInterval(updateTimerWithOneSecond);
        this.setState({
          timer: 'Lançar Genki Dama',
        });
        this.castGenkiDama();
      }
    }, updateTime);
  }

  castGenkiDama() {
    const africaPopulationPercentage = 14.9;
    const americaPopulationPercentage = 13.5;
    const antarcticaPopulationPercentage = 0.2;
    const asiaPopulationPercentage = 60;
    const europePopulationPercentage = 10.9;
    const oceaniaPopulationPercentage = 0.5;
    const { africaEnergy, americaEnergy, antarcticaEnergy, asiaEnergy,
      europeEnergy, oceaniaEnergy } = this.props;

    africaEnergy(africaPopulationPercentage);
    americaEnergy(americaPopulationPercentage);
    antarcticaEnergy(antarcticaPopulationPercentage);
    asiaEnergy(asiaPopulationPercentage);
    europeEnergy(europePopulationPercentage);
    oceaniaEnergy(oceaniaPopulationPercentage);
  }

  render() {
    const { timer } = this.state;

    return (
      <div className="dragonball-main">
        <img
          src={ gokuxfreeza }
          height="300px"
          width="530px"
          alt="Luta de Goku versus Freeza"
        />
        <span className="timer">{ timer }</span>
        <p className="abstract">
          ...Vegeta acredita que se transformou em Super Saiyajin, só que não,
          Freeza humilha tanto o Vegeta que ele começa a chorar em desespero.
          Então chega o Kakarotto para acabar com a palhaçada, mas Freeza
          petulante ainda mata Vegeta com um raio disparado de um de seus dedos.
          A luta entre Freeza e Goku começa com a promessa de vingar a morte
          dos Saiyajins, uma batalha que parece equilibrada a princípio se mostra
          uma total fake news quando Freeza decide revelar metade do seu poder,
          pobre Goku, perdendo tudo menos a esperança. Quando tudo parece perdido,
          Goku consegue utilizar o Kaioken 20 vezes maior, o Kamehameha combinado com
          o Kaioken... mas deu ruim ainda. Como última esperança estratégica Goku
          decide usar a Genki Dama, o negócio fica sério nesse momento! Quando
          Freeza percebe o plano de Goku tenta matá-lo desesperadamente, mas não
          consegue, Piccolo e os outros entram em cena!!! kkk. Goku aproveita a
          ajuda de seus amigos para estudar na Trybe, opa, para atingir Freeza
          com a Genki Dama...
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  africaEnergy: (percentage) => dispatch(sendAfricaEnergy(percentage)),
  americaEnergy: (percentage) => dispatch(sendAmericaEnergy(percentage)),
  antarcticaEnergy: (percentage) => dispatch(sendAntarcticaEnergy(percentage)),
  asiaEnergy: (percentage) => dispatch(sendAsiaEnergy(percentage)),
  europeEnergy: (percentage) => dispatch(sendEuropeEnergy(percentage)),
  oceaniaEnergy: (percentage) => dispatch(sendOceaniaEnergy(percentage)),
});

Dragonball.propTypes = {
  africaEnergy: PropTypes.func.isRequired,
  americaEnergy: PropTypes.func.isRequired,
  antarcticaEnergy: PropTypes.func.isRequired,
  asiaEnergy: PropTypes.func.isRequired,
  europeEnergy: PropTypes.func.isRequired,
  oceaniaEnergy: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Dragonball);
