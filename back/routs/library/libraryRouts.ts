import express from 'express'
const router = express.Router()
import protect from '../../middleware/authMiddleware'

import { createBook, getBooks, updateBook, deleteBook, getAllBooks } from './libraryController'

router.post('/', protect, createBook)
router.get('/', protect, getBooks) // only user books
router.get('/all', protect, getAllBooks) // only user books
router.put('/:id',protect, updateBook)
router.delete('/:id', protect, deleteBook)
export default router