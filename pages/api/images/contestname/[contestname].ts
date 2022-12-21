import type { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';

type Data = unknown;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const connection = await createConnection(process.env.DATABASE_URL ?? '');

  // get images by contest
  if (req.method === 'GET') {
    const { contestname } = req.query;
    try {
      let [rows, fields] = await connection.execute('SELECT * FROM images WHERE contestname = ? ORDER BY votes DESC;', [contestname]);
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.log('Error in GET request to api/images/contestname:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  } else {
    console.log('error: request method not available on this route');
    res.status(400).json({ error: 'request method not available on this route' });
  }
}
