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


describe('atividade 01 - Rota /btc/price', () => {
  it('verifica se o token recebido está no formato correto'+
  ' retornando os o status equivalente para o erro ou sucesso', async () => {
    const invalidCB = (req) => expect(req.status).to.be.eqls(400);
    const validCB = (req) => expect(req.status).to.be.eqls(200);
    await chai.request(app).post('/btc/price')
        .send({token: invalidToken1}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({token: invalidToken2}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({token: invalidToken3}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({token: invalidToken4}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({token: invalidToken5}).then(invalidCB);
    await chai.request(app).post('/btc/price')
        .send({token: validToken}).then(validCB);
  });
  it('deve retornar {message: "invalid token"} quando'+
    ' o token enviador estiver fora do padrão esperado', async () => {
    await chai.request(app).post('/btc/price')
        .send({token: invalidToken1}).then(({body})=> {
          const {message} = body;
          expect(message).to.exist;
          expect(message).to.be.eqls('invalid token');
          expect(message).to.not.be.eqls('valid token?');
        });
  });
});
