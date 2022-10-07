const {MongoClient} = require ('mongodb');
require ('dotenv').config ();

const mongodbClient = new MongoClient (process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const clientPromise = mongodbClient.connect ();

const handler = async (event, context) => {
   try {
    const database = (await clientPromise).db (process.env.MONGODB_DB);
    const collection = await database.collection (process.env.MONGODB_COLLECTION);
   } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify ({error: error.message}),
    };
  }
};