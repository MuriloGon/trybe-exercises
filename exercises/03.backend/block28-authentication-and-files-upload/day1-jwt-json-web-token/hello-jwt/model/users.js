const fs = require('fs/promises');
const prtt = require('prettier');

const dataPath = `${__dirname}/data/users.json`;

async function getUsers() {
  const rawData = await fs.readFile(dataPath, { encoding: 'utf-8' });
  const data = JSON.parse(rawData);
  return data;
}

async function saveJson(dataObj) {
  const rawData = JSON.stringify(dataObj);
  const prettyObjStr = prtt.format(rawData, { parser: 'json' });
  await fs.writeFile(dataPath, prettyObjStr);
  console.log(prettyObjStr);
}

async function authUser(username, password) {
  const users = await getUsers();
  const obj = users.find((data) => data.username === username);
  if (!obj) return null;
  const isAuth = obj.username === username && obj.password === password;
  const { admin } = obj;
  const output = { isAuth, admin };
  return output;
}

async function createUser(username, password, admin = false) {
  const existUser = await authUser(username, password);
  if (existUser) return null;
  const users = await getUsers();
  const output = { username, password, admin };
  users.push(output);
  await saveJson(users);
  return output;
}

async function deleteUser(username) {
  const users = await getUsers();
  const deleted = users.find((data) => data.username === username);
  const obj = users.filter((data) => data.username !== username);
  await saveJson(obj);
  return deleted;
}

module.exports = {
  getUsers,
  authUser,
  createUser,
  deleteUser,
};