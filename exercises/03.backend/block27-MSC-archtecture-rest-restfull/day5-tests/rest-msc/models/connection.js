const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
let schema = null;

async function connection() {
  if (schema) return schema;
  try {
    const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
    const dbSchema = conn.db('model_example');
    schema = dbSchema;
  } catch (err) {
    console.error(err);
  }
  return schema;
}

// async function connection() {
//   if (schema) return Promise.resolve(schema);
//   return MongoClient
//     .connect(MONGO_DB_URL, OPTIONS)
//     .then((conn) => conn.db('model_example'))
//     .then((dbSchema) => {
//       schema = dbSchema;
//       return schema;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

module.exports = connection;
