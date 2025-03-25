import {
  registerUser,
  login,
  getCurrentUser,
  getAllUsers,
  checkEmailTaken,
  checkUsernameTaken,
} from './userController'
import express from 'express'
const router = express.Router()
import protect from '../../middleware/authMiddleware'

router.post('/register', registerUser)
router.post('/login', login)
router.get('/', protect, getCurrentUser)
router.get('/all', getAllUsers)
router.post('/exist/email', checkEmailTaken)
router.post('/exist/username', checkUsernameTaken)

export default router
