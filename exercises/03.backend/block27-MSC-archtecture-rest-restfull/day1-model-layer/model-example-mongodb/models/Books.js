const connection = require('./connection');

async function getAll() {
  const db = await connection();
  const books = db.collection('books');
  const output = await books.find().toArray();
  return output;
}

async function getByAuthorId(authorId) {
  const db = await connection();
  const books = db.collection('books');
  const output = await books.find({ author_id: Number(authorId) }).toArray();
  if (output.length === 0) return null;
  return output;
}

async function create(title, authorId) {
  const db = await connection();
  const authors = db.collection('books');
  await authors.insertOne({ title, author_id: authorId });
}

module.exports = {
  getAll,
  getByAuthorId,
  create,
};
