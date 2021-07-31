const fs = require('fs/promises');
const { exec } = require('child_process');
const { error } = require('console');

async function writeFiles() {
  const strs = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  strs.forEach((item, index) => {
    fs.writeFile(`./file${index + 1}.txt`, item);
  });
}

function findFiles() {
  return new Promise((resolve, reject) => {
    exec('ls file*.txt | cat', (err, sout, serr) => {
      if (err) return reject(new Error('Erro de shell'));
      const data = sout.split('\n').filter(item => item != '');
      if (data.length === 0) return reject(new Error('Nenhum arquivo encontrado'))
      else return resolve(data);
    })
  });
}

async function readFilesAndWrite() {
  const filesLocations = await findFiles();
  const promises = filesLocations.map((loc) => {
    return fs.readFile('./' + loc, { encoding: 'utf-8' });
  });
  const filesData = await Promise.all(promises);
  try {
    fs.writeFile('./fileAll.txt', filesData.join(' '));
    return
  } catch (e) {
    throw new Error('Erro ao salvar fileAll.txt');
  }
}


readFilesAndWrite().catch(console.error);