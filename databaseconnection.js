const mongoose = require('mongoose');

dbConnection = async () => {
  const DB_URL = process.env.DB_URL;
  if (!DB_URL) {
    console.warn('db connection is established');
    return;
  }


  await mongoose.connect(DB_URL);
  console.log('Connected to MongoDB successfully!');

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
};

module.exports = dbConnection;

