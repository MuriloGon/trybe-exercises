const fs = require('fs/promises');
const { expect } = require('chai');
const { stub } = require('sinon');
const writeTextFile = require('../writeTextFile');

const path = 'arquivo.txt';
const content = 'olá mundo';
const outError = (num) => `Expected 2 parameters but was found ${num}!`;

describe('exercises 04, 05 - funçao writeTextFile', () => {
  it('deve possuir dois parâmentros', async () => {
    try { await writeTextFile(path); } catch (error) {
      expect(error.message).to.be.eql(outError(1));
    }
    try { await writeTextFile(); } catch (error) {
      expect(error.message).to.be.eql(outError(0));
    }
  });

  it('os parâmetros devem ser do tipo string ', async () => {
    try { await writeTextFile(1, content); } catch (error) {
      expect(error.message).to.eql('The file name must be a string');
    }
    try { await writeTextFile(path, 1); } catch (error) {
      expect(error.message).to.eql('The content must be a string');
    }
  });

  it('deve retortar a message "OK" em caso de sucesso ao grava o arquivo', async () => {
    stub(fs, 'writeFile').resolves('OK');
    const status = await writeTextFile(path, content);
    expect(status).to.be.equals('OK');
  });
});
