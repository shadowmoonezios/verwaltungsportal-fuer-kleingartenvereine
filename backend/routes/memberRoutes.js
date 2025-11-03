const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// GET all members
router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// POST a new member
router.post('/', async (req, res) => {
  const newMember = new Member(req.body);
  const savedMember = await newMember.save();
  res.status(201).json(savedMember);
});

module.exports = router;
