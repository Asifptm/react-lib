import express from 'express';
import { getMembers, addMember, updateMember, deleteMember } from '../controllers/memberController.js';

const router = express.Router();

router.get('/', getMembers);
router.post('/', addMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

export default router;
