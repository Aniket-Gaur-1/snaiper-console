const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    position: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true }
}, { timestamps: true });

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);
module.exports = TeamMember;