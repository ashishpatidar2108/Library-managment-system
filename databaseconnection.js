const mongoose = require('mongoose');

function DbConnection() {
    const DB_URL = process.env.MONGO_URI;

    // Check if the URI is actually being read
    if (!DB_URL) {
        console.error("❌ Error: MONGO_URI is undefined. Check your .env file!");
        return;
    }

    mongoose.connect(DB_URL)
        .then(() => {
            console.log("DB Connected... 🚀");
        })
        .catch((error) => {
            console.error("Connection Error:", error.message);
        });
}

module.exports = DbConnection;