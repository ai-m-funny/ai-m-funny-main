import type { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';

type Data = unknown;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const connection = await createConnection(process.env.DATABASE_URL ?? '');

  // get images by username
  if (req.method === 'GET') {
    const { username } = req.query;
    try {
      let [rows, fields] = await connection.execute('SELECT * FROM images WHERE username = ?;', [username]);
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.log('Error in GET request to api/images/username:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  }
}
