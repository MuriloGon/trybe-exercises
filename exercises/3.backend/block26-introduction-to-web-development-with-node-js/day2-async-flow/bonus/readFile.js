const { questionPath } = require('readline-sync');
const { readFileSync } = require('fs');;

const path = questionPath('Qual o caminho do arquivo?\n');

try {
  const data = readFileSync(path, { encoding: 'utf-8' });
  console.log(data);
} catch (erro) {
  throw new Error('Arquivo não encontrado');
}