const express = require('express')
const router = express.Router()
const {protect} = require('../../middleware/authMiddleware')

const { createBook, getBooks, updateBook, deleteBook } = require('./libraryController')

router.post('/', protect, createBook)
router.get('/', protect, getBooks) // only user books
router.put('/:id',protect, updateBook)
router.delete('/:id', protect, deleteBook)
module.exports = router