    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    require('dotenv').config();

    const app = express();



    // Middleware
    app.use(cors());
    app.use(express.json());

    // Database Connection
    mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.error(err));

    // Import Routes
    const partnerRoutes = require('./routes/partnerRoutes');
    const teamMemberRoutes = require('./routes/teamMemberRoutes');

    const keywordRoutes = require("./routes/keywordRoutes");
    app.use("/api", keywordRoutes);

    // Use Routes
    app.use('/api/partners', partnerRoutes);
    app.use('/api/team-members', teamMemberRoutes);

    // Start the Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });