const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
mongoose.connect('mongodb://127.0.0.1:27017/library');

// Definition of mongo tables
const Author = mongoose.model('Author', new mongoose.Schema({
	name: String,
	surname: String,
}));

const Book = mongoose.model('Book', new mongoose.Schema({
	title: String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Author'
	}
}));

app.get('/books', (req, res) => {
	Book.find({}, (err, books) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send(books);
	});
});

app.get('/books/:bookId', (req, res) => {
	Book.findById(req.params.bookId, (err, book) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send(book);
	});
});

app.post('/books', (req, res) => {
	const book = new Book({
		title: req.body.title,
		author: req.body.author,
	});
	book.save((err, book) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send(book);
	});
});
app.put('/books/:bookId', (req, res) => {
	Book.findByIdAndUpdate(req.params.bookId, {
		title: req.body.title,
		author: req.body.author,
	}, (err, book) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send(book);
	});
});
app.delete('/books/:bookId', (req, res) => {
	Author.findByIdAndDelete(req.params.bookId, (err, author) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send('deleted');
	});
});

app.get('/authors', (req, res) => {
	Author.find({}, (err, authors) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send(authors);
	});
});

app.get('/authors/:authorId', (req, res) => {
	Author.findById(req.params.authorId, (err, author) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send(author);
	});
});

app.post('/authors', (req, res) => {
	const author = new Author({
		name: req.body.name,
		surname: req.body.surname,
	});
	author.save((err, author) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send(author);
	});
});

app.put('/authors/:authorId', (req, res) => {
	Author.findByIdAndUpdate(req.params.authorId, {
		name: req.body.name,
		surname: req.body.surname,
	}, (err, author) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send(author);
	});
});

app.delete('/authors/:authorId', (req, res) => {
	Author.findByIdAndDelete(req.params.authorId, (err, author) => {
		if (err) {
			return res.status(400).send({
				message: err
			});
		}
		res.send('deleted');
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
