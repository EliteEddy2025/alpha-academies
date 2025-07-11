const express = require('express');
const auth = require('../middleware/auth');
const Progress = require('../models/Progress');
const User = require('../models/User');
const router = express.Router();

// Get progress
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('progress');
    res.json(user.progress);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update progress
router.post('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const progress = await Progress.findById(user.progress);
    progress.subjects = req.body.subjects || progress.subjects;
    progress.achievements = req.body.achievements || progress.achievements;
    await progress.save();
    res.json(progress);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;