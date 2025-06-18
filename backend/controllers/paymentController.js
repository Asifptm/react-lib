// controllers/paymentController.js
import Payment from '../models/Payment.js';

export const getPayments = async (req, res) => {
  const payments = await Payment.find().populate('memberId');
  res.json(payments);
};

export const addPayment = async (req, res) => {
  const payment = await Payment.create(req.body);
  res.status(201).json(payment);
};

export const updatePaymentStatus = async (req, res) => {
  const payment = await Payment.findByIdAndUpdate(
    req.params.id,
    { paid: true },
    { new: true }
  );
  res.json(payment);
};
