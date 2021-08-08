const { ObjectId } = require('mongodb');
const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = (authorData) => {
  const {
    id, firstName, middleName, lastName,
  } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// Busca todos os autores do banco.
const getAll = async () => {
  const db = await connection();
  const authors = db.collection('authors');
  const output = authors.find().toArray();
  return output;
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    id, firstName, middleName, lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') {
    return false;
  }

  if (!lastName || typeof lastName !== 'string') {
    return false;
  }

  if (middleName && typeof middleName !== 'string') {
    return false;
  }

  return true;
};

const create = async (firstName, middleName, lastName) => {
  const db = await connection();
  const authors = db.collection('authors');
  const result = await authors.insertOne({ firstName, middleName, lastName });
  return getNewAuthor({
    id: result.insertedId, firstName, middleName, lastName,
  });
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
