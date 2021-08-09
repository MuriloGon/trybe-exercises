const connection = require('./connection');

async function create(firstName, lastName, email, password) {
  const q = `
  INSERT INTO users_crud.users(first_name, last_name, email, password)
  VALUES(?, ?, ?, ?);`;
  const [res] = await connection.execute(q, [firstName, lastName, email, password]);
  return res.insertId;
}

async function getAll() {
  const q = `
  SELECT id, first_name firstName, last_name lastName, email, password
  FROM users_crud.users`;
  const [data] = await connection.execute(q);
  return data;
}

async function getById(id) {
  const q = `
  SELECT id, first_name firstName, last_name lastName, email, password
  FROM users_crud.users
  WHERE id=?`;
  const [data] = await connection.execute(q, [id]);
  return data;
}

async function updateById(id, firstName, lastName, email, password) {
  const q = `
  UPDATE users_crud.users
  SET first_name=?, last_name=?, email=?, password=?
  WHERE id=?`;
  try {
    const [res] = await connection.execute(q, [firstName, lastName, email, password, id]);

    return res.changedRows;
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
