const { ObjectId } = require('mongodb');
const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const db = await connection();
    const products = db.collection('products');
    const result = await products.insertOne({ name, brand });
    return { id: result.insertedId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const products = db.collection('products');
    const rows = await products.find({}).toArray();
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const db = await connection();
    const products = db.collection('products');
    const result = await products.find({ _id: ObjectId(id) }).toArray();
    if (!result.length) return null;
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const db = await connection();
    const products = db.collection('products');
    await products.updateOne(
      { _id: ObjectId(id) }, { $set: { name, brand } },
    );
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const db = await connection();
    const products = db.collection('products');
    const [product] = await products.find({ _id: ObjectId(id) }).toArray();
    if (!product) return {};
    await products.deleteOne({ _id: ObjectId(id) });
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = {
  add, getAll, getById, update, exclude,
};
