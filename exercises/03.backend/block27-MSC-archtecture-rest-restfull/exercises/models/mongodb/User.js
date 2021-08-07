const connection = require('./connection');

async function create(firstName, lastName, email, password) {
  const db = await connection();
  const users = db.collection('users');
  const data = await users.insertOne({
    firstName, lastName, email, password,
  });
  return data;
}

module.exports = {
  create,
};
