import fs from 'fs';

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, { encoding: 'utf8' })
  console.log(data);
} catch(e) {
  console.error('Erro ao ler o arquivo: %s', e.path);
}