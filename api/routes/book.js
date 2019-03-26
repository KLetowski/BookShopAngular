const express = require('express');
const router = express.Router();
const { ResourceNotFoundError } = require('../errors');
const books = require('../files/books');

const getPredicate = ({ title = '', author = '' }) => item =>
  item.title.match(new RegExp(title, 'g')) &&
  item.author.match(new RegExp(author, 'g'));

const getBookWithCoverUrl = (req, book) => {
  if (!book.coverUrl.match(/^http/)) {
    book.coverUrl = `${req.protocol}://${req.get('host')}${book.coverUrl}`;
  }

  return book;
};

router.get('/', (req, res, next) => {
  const page = +req.query.page || 1;
  const limit = 10;
  const filteredBooks = books.filter(getPredicate(req.query.search || {}));
  const result = filteredBooks
    .slice((page - 1) * limit, page * limit)
    .map(book => getBookWithCoverUrl(req, book));

  return res.status(200).json({
    data: result,
    metadata: {
      page: page,
      recordsPerPage: limit,
      totalRecords: filteredBooks.length
    }
  });
});

router.get('/:id', (req, res, next) => {
  const book = books.find(book => book.id === +req.params.id);
  if (!book) {
    throw new ResourceNotFoundError('Book', +req.params.id);
  }

  return res.status(200).json({
    data: getBookWithCoverUrl(req, book)
  });
});

module.exports = router;
