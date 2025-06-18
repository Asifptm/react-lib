import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  genre: String,
  quantity: Number
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
