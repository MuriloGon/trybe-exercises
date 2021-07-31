const nums = require('./exercise01');

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

nums(a, b, c).then(console.log).catch(console.error);
