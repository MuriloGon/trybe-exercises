import { readFile } from 'fs/promises';

const nomeDoArquivo = 'meu-arqufivo.txt';

readFile(nomeDoArquivo, { encoding: 'utf8' })
  .then(console.log)
  .catch(console.error)
