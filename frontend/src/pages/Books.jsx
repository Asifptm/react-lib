// Books Page 
import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import Navbar from '../components/Navbar';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get('/books').then(res => setBooks(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h2>Books</h2>
      <ul>
        {books.map(book => <li key={book._id}>{book.title}</li>)}
      </ul>
    </>
  );
};

export default Books;
