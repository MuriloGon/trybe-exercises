const fs = require('fs/promises');

async function writeTextFile(...args) {
  const [fname, content] = args;

  if (args.length < 2) throw new Error(`Expected 2 parameters but was found ${args.length}!`);
  if (typeof fname !== 'string') throw new Error('The file name must be a string');
  else if (typeof content !== 'string') throw new Error('The content must be a string');

  try {
    await fs.writeFile(`${process.env.PWD}/${fname}`, content, { encoding: 'utf-8', flag: '' });
  } catch (error) {
    throw new Error('Erro ao gravar o arquivo');
  }

  return 'OK';
}

module.exports = writeTextFile;
