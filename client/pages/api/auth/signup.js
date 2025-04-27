// pages/api/auth/signup.js
import clientPromise from "../../../lib/mongodb";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !email.includes('@') || !password || password.trim().length < 6) {
    return res.status(422).json({ message: 'Invalid input - password must be at least 6 characters.' });
  }

  const client = await clientPromise;
  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email });

  if (existingUser) {
    return res.status(422).json({ message: 'User already exists.' });
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email,
    password: hashedPassword,
    createdAt: new Date()
  });

  res.status(201).json({ message: 'User created!', userId: result.insertedId });
}
