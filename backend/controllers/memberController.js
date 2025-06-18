// controllers/memberController.js
import Member from '../models/Member.js';

export const getMembers = async (req, res) => {
  const members = await Member.find();
  res.json(members);
};

export const addMember = async (req, res) => {
  const member = await Member.create(req.body);
  res.status(201).json(member);
};

export const updateMember = async (req, res) => {
  const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(member);
};

export const deleteMember = async (req, res) => {
  await Member.findByIdAndDelete(req.params.id);
  res.json({ message: 'Member deleted' });
};
