const { ObjectId } = require('mongodb');
const connection = require('./connection');

async function create(firstName, lastName, email, password) {
  const db = await connection();
  const users = db.collection('users');
  const data = await users.insertOne({
    firstName, lastName, email, password,
  });
  return data;
}

async function getAll() {
  const db = await connection();
  const users = db.collection('users');
  const data = await users.find().toArray();
  return data;
}

async function getById(id) {
  const db = await connection();
  const users = db.collection('users');
  const data = await users.find(
    { _id: ObjectId(id) },
    { projection: { _id: 0 } },
  ).toArray();
  return data;
}

async function updateById(id, firstName, lastName, email, password) {
  const db = await connection();
  const users = db.collection('users');

  try {
    const response = await users.updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          firstName, lastName, email, password,
        },
      },
    );
    return response.matchedCount;
  } catch (error) {
    return null;
  }
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};
