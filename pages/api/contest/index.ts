import type { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';

type Data = unknown;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const connection = await createConnection(process.env.DATABASE_URL ?? '');

  // get most current contest
  if (req.method === 'GET') {
    const date = new Date();
    date.setUTCHours(0, 0, 0, 0);
    const time = date.getTime();
    const starttime = time;
    try {
      let [rows, fields] = await connection.execute('SELECT * FROM contests WHERE starttime = ?', [starttime]);
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.log('Error in GET request to api/contest:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  } else if (req.method === 'POST') {
    const password = 'potatoes';
    const { inputPassword, contestname } = req.body;
    const date = new Date();
    date.setUTCHours(0, 0, 0, 0);
    const time = date.getTime();
    const timeWholeDay = 1000 * 60 * 60 * 24;
    const dateFactor = 3 * timeWholeDay;
    const starttime = time + dateFactor;
    const endtime = starttime + timeWholeDay;
    if (password === inputPassword) {
      try {
        let [rows, fields] = await connection.execute('INSERT INTO contests (starttime, endtime, contestname) VALUES (?, ?, ?);', [starttime, endtime, contestname]);
        console.log(rows);
        res.status(200).json(rows);
      } catch (error) {
        console.log('Error in POST request to api/contest:', error);
        res.status(400).json({ error: 'failed to load data' });
      }
    } else {
      console.log('error: wrong password');
      res.status(400).json({ error: 'failed to load data' });
    }
  } else {
    console.log('error: request method not available on this route');
    res.status(400).json({ error: 'request method not available on this route' });
  }
}
