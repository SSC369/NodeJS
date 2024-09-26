const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const dbname = "student";
const collection_name = "exams";
const exams = client.db(dbname).collection(collection_name);

const main = async () => {
  try {
    await client.connect();
    exams.insertOne({ name: "Sai", subjects: { science: 50 } });
    console.log(
      `Connected to the database 🌍. \nFull connection string: ${uri}`
    );
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  }
};
main();
