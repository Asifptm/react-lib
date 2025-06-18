// Payments Page 
import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import Navbar from '../components/Navbar';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    API.get('/payments').then(res => setPayments(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h2>Payments</h2>
      <ul>
        {payments.map(p => (
          <li key={p._id}>
            {p.memberId?.name || 'Unknown'} - ₹{p.amount} - {p.paid ? 'Paid' : 'Pending'}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Payments;
