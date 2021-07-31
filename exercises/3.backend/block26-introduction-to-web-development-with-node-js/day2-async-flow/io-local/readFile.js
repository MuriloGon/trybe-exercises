import fs from 'fs';

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, { encoding: 'utf8' }, (err, data) => {
  if(err) {
    console.error(`Arquivo não encontrado ${err.path}`);
    return 1;
  }
  console.log('Data:', data);
});
