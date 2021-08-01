const nums = require('./exercise01');

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

async function main() {
  try {
    const data = await nums(a, b, c);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

main();
