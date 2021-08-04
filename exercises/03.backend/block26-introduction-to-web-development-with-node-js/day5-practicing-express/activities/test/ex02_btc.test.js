import chai, {expect} from 'chai';
import app from '../index.js';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import crypto from 'crypto';
chai.use(chaiHttp);

const validToken = '1234abcd5678';
const invalidToken1 = '123--12312-3';
const invalidToken2 = '123412341234';
const invalidToken3 = 'abcdABCDabcd';
const invalidToken4 = '123asd';
const invalidToken5 = '12345abcde12345';

const responseAPI = {
  'time': {
    'updated': 'Aug 4, 2021 07:03:00 UTC',
    'updatedISO': '2021-08-04T07:03:00+00:00',
    'updateduk': 'Aug 4, 2021 at 08:03 BST',
  },
  'disclaimer': 'This data was produced from the CoinDesk Bitcoin '+
  'Price Index (USD). Non-USD currency data converted using hourly '+
  'conversion rate from openexchangerates.org',
  'bpi': {
    'USD': {
      'code': 'USD',
      'rate': '37,754.2367',
      'description': 'United States Dollar',
      'rate_float': 37754.2367,
    },
    'BTC': {
      'code': 'BTC',
      'rate': '1.0000',
      'description': 'Bitcoin',
      'rate_float': 1,
    },
  },
};


describe('atividade 01 - Rota /btc/price', () => {
  it('verifica se o token recebido está no formato correto'+
  ' retornando os o status equivalente para o erro ou sucesso', async () => {
    const invalidCB = (req) => expect(req.status).to.be.eqls(400);
    const validCB = (req) => expect(req.status).to.be.eqls(200);
    await chai.request(app).post('/btc/price')
        .send({Authorization: invalidToken1}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({Authorization: invalidToken2}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({Authorization: invalidToken3}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({Authorization: invalidToken4}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({Authorization: invalidToken5}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({Authorization: validToken}).then(validCB);
  });
  it('deve retornar {message: "invalid token"} quando'+
    ' o token enviador estiver fora do padrão esperado', async () => {
    await chai.request(app).post('/btc/price')
        .send({Authorization: invalidToken1}).then(({body})=> {
          const {message} = body;
          expect(message).to.exist;
          expect(message).to.be.eqls('invalid token');
          expect(message).to.not.be.eqls('valid token?');
        });
  });
  it('', async () => {
    global.fetch = () => (Promise.resolve({
      json: () => Promise.resolve(responseAPI),
    }));
    await chai.request(app).post('/btc/price')
        .send({Authorization: validToken})
        .then(({body}) => {
          expect(body).to.be.eqls(responseAPI);
        });
  });
});
