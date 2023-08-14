import { NextApiRequest, NextApiResponse } from 'next';
import {connectToDatabase} from '../../../src/utils'; // Import your MongoDB connection utility
import {User, IUser } from '../../../src/Models/User'; // Import your User model


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await connectToDatabase(); // Connect to the MongoDB database

    // Validate the request body using the defined interface
    const { email, password } = req.body;

    // Perform user authentication logic here (e.g., check if email and password match)
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'An error occurred during login' });
  }
}
