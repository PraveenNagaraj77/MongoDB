const express = require('express');

const router = express.Router();

const {  createAuthor, createBook,getBookWithAuthor }  = require('../controller/BookController')


router.post('/author',createAuthor);
router.post('/book',createBook);
router.get('/book/:id',getBookWithAuthor);



module.exports= router;