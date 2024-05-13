import { MongoClient } from "mongodb";
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const url = `mongodb+srv://${user}:${password}@cluster0.xosvyij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupsCollections = db.collection("meetups");
    const result = await meetupsCollections.insertOne(data);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
