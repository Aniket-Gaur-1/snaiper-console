const express = require('express');
const TeamMember = require('../models/TeamMember');

const router = express.Router();

// Create a Team Member
router.post('/', async(req, res) => {
    try {
        const newTeamMember = new TeamMember(req.body);
        const savedTeamMember = await newTeamMember.save();
        res.status(201).json(savedTeamMember);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all Team Members
router.get('/', async(req, res) => {
    try {
        const teamMembers = await TeamMember.find();
        res.status(200).json(teamMembers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;