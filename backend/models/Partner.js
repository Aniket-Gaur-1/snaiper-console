const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    websiteUrl: { type: String },
    companyEmail: { type: String, required: true, unique: true }
}, { timestamps: true });

const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;