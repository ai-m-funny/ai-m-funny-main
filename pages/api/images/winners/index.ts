import type { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';

type Data = unknown;

type subData = {
  idimages: string;
  url: string;
  votes: string;
  username: string;
  contestname: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const connection = await createConnection(process.env.DATABASE_URL ?? '');

  // get winners by max votes
  if (req.method === 'GET') {
    try {
      let [rows, fields] = await connection.execute('SELECT idimages, url, votes, username, contestname FROM images');
      const rowsArr: [subData] = JSON.parse(JSON.stringify(rows));
      const winners: {
        [key: string]: subData;
      } = {};
      for (let i = 0; i < rowsArr.length; i++) {
        if (winners[rowsArr[i].contestname]) {
          if (Number(rowsArr[i].votes) > Number(winners[rowsArr[i].contestname]?.votes)) winners[rowsArr[i].contestname] = rowsArr[i];
        } else {
          winners[rowsArr[i].contestname] = rowsArr[i];
        }
      }
      res.status(200).json(winners);
    } catch (error) {
      console.log('Error in GET request to api/images/winners:', error);
      res.status(400).json({ error: 'failed to load data' });
    }
  } else {
    console.log('error: request method not available on this route');
    res.status(400).json({ error: 'request method not available on this route' });
  }
}
