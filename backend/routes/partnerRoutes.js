const express = require('express');
const Partner = require('../models/Partner');

const router = express.Router();

// Create a Partner
router.post('/', async(req, res) => {
    try {
        const { companyName, registrationNumber, contactNumber, companyEmail } = req.body;

        // Validate required fields
        if (!companyName || !registrationNumber || !contactNumber || !companyEmail) {
            return res.status(400).json({ error: "All required fields must be filled" });
        }

        const newPartner = new Partner(req.body);
        const savedPartner = await newPartner.save();
        res.status(201).json(savedPartner);
    } catch (err) {
        // Handle duplicate key errors
        if (err.code === 11000) {
            return res.status(400).json({ error: "Duplicate entry detected" });
        }
        res.status(500).json({ error: err.message });
    }
});

// Get all Partners
router.get('/', async(req, res) => {
    try {
        const partners = await Partner.find();
        res.status(200).json(partners);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;