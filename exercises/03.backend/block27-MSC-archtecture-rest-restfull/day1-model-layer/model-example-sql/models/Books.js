const connection = require('./connection');

async function getAll() {
	const [books] = await connection.execute('SELECT * FROM model_example.authors;');
	return books;
}

async function getByAuthorId(authorId) {
	const query = 'SELECT * FROM model_example.authors WHERE id=?;';
	const [books] = await connection.execute(query, [authorId]);
	if (books.length === 0) {
		return null;
	}

	return books;
}

async function create(title, authorId) {
	const query = 'INSERT INTO model_example.books(title, author_id) VALUES (?, ?)';
	await connection.query(query, [title, authorId]);
}

module.exports = {
	getAll,
	getByAuthorId,
	create,
};
