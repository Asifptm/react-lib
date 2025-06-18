// utils/initDb.js
import User from '../models/User.js';
import Book from '../models/Book.js';
import Member from '../models/Member.js';
import Payment from '../models/Payment.js';
import bcrypt from 'bcryptjs';

export const initDb = async () => {
  // Ensure collections exist
  await Promise.all([
    User.createCollection(),
    Book.createCollection(),
    Member.createCollection(),
    Payment.createCollection(),
  ]);

  console.log('✅ Collections ensured');

  // Optional: Seed admin user if none exists
  const adminExists = await User.findOne({ role: 'admin' });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('Admin123@', 10);
    await User.create({
      name: 'Admin',
      email: 'admin@library.com',
      password: hashedPassword,
      role: 'admin',
    });
    console.log('👤 Default admin user created: admin@library.com / admin123');
  }
};
