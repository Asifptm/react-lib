import express from 'express';
import {
  getPayments,
  addPayment,
  updatePaymentStatus
} from '../controllers/paymentController.js';

const router = express.Router();

router.get('/', getPayments);
router.post('/', addPayment);
router.put('/:id', updatePaymentStatus);

export default router;
