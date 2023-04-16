const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: false,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB connection successful.');
}).catch((e) => {
  console.log('MongoDB connection error: ', e.message)
});

module.exports = mongoose.connection;

// database.js

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://beenarob:<kronos>@cluster0.2nplcvk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

function getDb() {
  return client.db("<database-name>");
}

module.exports = { connect, getDb };
