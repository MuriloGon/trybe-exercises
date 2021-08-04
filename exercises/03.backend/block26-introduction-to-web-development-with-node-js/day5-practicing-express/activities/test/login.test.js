import chai, {expect} from 'chai';
import app from '../index.js';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

const reqObj = {
  inv0: {},
  inv1: {email: '123@3231', password: '12321'},
  inv2: {email: '123@3231'},
  inv3: {password: null},
  inv4: {email: 'email@email.com', password: '123'},
  inv5: {email: 'email@email.com', password: '123456789'},
  val: {email: 'email@email.com', password: '12345'},
};

describe('atividade 01 - Rota /login', () => {
  it('deve responder com uma messagem de erro quando o '+
  'usuário mandar a requisição no formato incorreto', async () => {
    function badRes({status, body}) {
      expect(body).to.be.eql({message: 'email or password is incorrect'});
      expect(status).to.be.eql(400);
    }
    function okRes({status}) {
      expect(status).to.be.eql(200);
    }
    await chai.request(app).get('/login').send(reqObj.inv0).then(badRes);
    await chai.request(app).get('/login').send(reqObj.inv1).then(badRes);
    await chai.request(app).get('/login').send(reqObj.inv2).then(badRes);
    await chai.request(app).get('/login').send(reqObj.inv3).then(badRes);
    await chai.request(app).get('/login').send(reqObj.inv4).then(badRes);
    await chai.request(app).get('/login').send(reqObj.inv5).then(badRes);
    await chai.request(app).get('/login').send(reqObj.val).then(okRes);
  });
});
