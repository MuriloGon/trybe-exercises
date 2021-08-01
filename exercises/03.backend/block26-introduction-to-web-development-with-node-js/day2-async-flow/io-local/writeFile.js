import fs from 'fs/promises';

fs.writeFile('./meu-arquivo.txt', 'Meu texto !!!!')
  .then(() => console.log('Arquivo gravado com sucesso'))
  .catch((err) => console.error(`Erro ao escrever no arquivo: ${err.message}`));
