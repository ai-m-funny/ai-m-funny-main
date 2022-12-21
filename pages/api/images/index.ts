import type { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';

type Data = unknown;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const connection = await createConnection(process.env.DATABASE_URL ?? '');

  // handle image submissions
  if (req.method === 'POST') {
    try {
      const { url, votes, username, contestname } = req.body;
      let [rows, fields] = await connection.execute('INSERT INTO images (url, votes, username, contestname) VALUES (?, ?, ?, ?);', [url, votes, username, contestname]);
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.log('Error in POST request to api/images:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  }
  // get all images
  else if (req.method === 'GET') {
    try {
      let [rows, fields] = await connection.execute('SELECT * FROM images;');
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.log('Error in GET request to api/images:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  } else {
    console.log('error: request method not available on this route');
    res.status(400).json({ error: 'request method not available on this route' });
  }
}
