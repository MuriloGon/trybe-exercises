const { questionPath, question } = require('readline-sync');
const { readFile, writeFile } = require('fs/promises');


async function main() {
  const path = questionPath('Qual o caminho do arquivo?\t');
  let data = '';

  try {
    data = await readFile(path, { encoding: 'utf-8' });
  } catch (error) {
    throw new Error('Arquivo não existe');
    process.exit(1);
  }

  const toReplace = question('Qual palavra deseja substituir?\t');
  const replaceWith = question('Qual a palavra a ser usada na substituição?\t');
  
  const outData = data.replace(new RegExp(toReplace, 'g'), replaceWith);

  writeFile(path, outData)
    .then(() => {
      console.log('\n\n==== Arquivo Gravado ====\n\n');
      console.log(data);
      console.log('\n\n==== Arquivo Gravado ====\n\n');
    })
    .catch((e) => {
      console.error('erro na gravação do arquivo')
    });
}

main();
