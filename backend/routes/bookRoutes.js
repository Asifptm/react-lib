// bookRoutes.js (using ES Modules)

import express from 'express';
import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from '../controllers/bookController.js';
import {
  authenticate,
  authorizeAdmin,
  rateLimiter,
} from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', rateLimiter, authenticate, getBooks);
router.post('/', authenticate, authorizeAdmin, addBook);
router.put('/:id', authenticate, authorizeAdmin, updateBook);
router.delete('/:id', authenticate, authorizeAdmin, deleteBook);

export default router;
