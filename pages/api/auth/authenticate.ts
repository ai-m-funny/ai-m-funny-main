import type { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';

type Data = unknown;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const connection = await createConnection(process.env.DATABASE_URL ?? '');

  // handle sign up
  if (req.method === 'POST') {
    try {
      const { username, providerId, provider } = req.body;
      let [rows, fields] = await connection.execute('INSERT INTO users (username, provider_id, provider) VALUES (?, ?, ?);', [username, providerId, provider]);
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.log('Error in POST request to api/auth/authenticate:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  }
  // handle sign in
  else if (req.method === 'GET') {
    try {
      let [rows, fields] = await connection.execute('SELECT * FROM users;');
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.log('Error in GET request to api/auth/authenticate:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  }
}
