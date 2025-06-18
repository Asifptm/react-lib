import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  joinedAt: { type: Date, default: Date.now },
});

const Member = mongoose.model('Member', memberSchema);
export default Member;
