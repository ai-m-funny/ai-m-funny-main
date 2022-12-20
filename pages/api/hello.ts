// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createConnection, QueryError, RowDataPacket } from 'mysql2';
const connection = createConnection(process.env.DATABASE_URL ?? '');
connection.query('SELECT * FROM users', (err: QueryError, rows: RowDataPacket[]) => {
  console.log('The solution is: ', rows);
});
connection.end();

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}
