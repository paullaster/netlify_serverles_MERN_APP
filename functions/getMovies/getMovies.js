const {MongoClient} = require ('mongodb');
require ('dotenv').config ();

const mongodbClient = new MongoClient (process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
