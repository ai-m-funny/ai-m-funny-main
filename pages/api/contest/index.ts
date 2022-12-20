import type { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';

type Data = unknown;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const connection = await createConnection(process.env.DATABASE_URL ?? '');

  // get most current contest
  if (req.method === 'GET') {
    try {
      let [rows, fields] = await connection.execute('SELECT * FROM contests WHERE DATE(`timestamp`) = CURDATE();');
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.log('Error in GET request to api/contest:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  }
}
