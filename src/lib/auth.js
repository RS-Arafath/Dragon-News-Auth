import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(
  'mongodb+srv://dragon_news_db:bw3gyNZn2lLCmEGv@cluster0.oo6sfix.mongodb.net/?appName=Cluster0',
);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
