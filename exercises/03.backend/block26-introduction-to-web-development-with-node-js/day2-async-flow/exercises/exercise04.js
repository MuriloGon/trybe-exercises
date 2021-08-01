const fs = require('fs/promises');

async function getData() {
  const file_path = './simpsons.json';
  const options = { encoding: 'utf-8' };
  try {
    const raw_data = await fs.readFile(file_path, options);
    const data = JSON.parse(raw_data);
    return data;
  }
  catch (e) {
    console.error(e);
  }
}
// getData().then(d => d.forEach(({ id, name }) => console.log(`${id} - ${name}`)));

function idt(id) {
  return new Promise((resolve, reject) => {
    getData()
      .then(d => {
        if (Boolean(d[id])) resolve(d[id])
        else {
          reject(Error(`Id - ${id} - não encontrado`))
        }
      });
  });
}

async function getById(id) {
  const data = await getData();
  if (data[id] === undefined) {
    throw Error(`Id (${id}) não encontrado`)
  }
  return data[id];
}

async function removeItemsByIds(...ids) {
  let data = await getData();
  data = data.filter(({ id }) => !ids.includes(Number(id)));
  const rawData = JSON.stringify(data);
  await fs.writeFile('./simpsons.json', rawData);
}

async function pickItemsByIds(...ids) {
  let data = await getData();
  data = data.filter(({ id }) => ids.includes(Number(id)));
  const rawData = JSON.stringify(data);
  await fs.writeFile('./simpsonsFamily.json', rawData);
}

async function replaceSimpsonFamily(...ids) {
  let data = await getData();
  data = data.filter(({ id }) => ids.includes(Number(id)));
  const rawData = JSON.stringify(data);
  await fs.writeFile('./simpsonsFamily.json', rawData);
}
