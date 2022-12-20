import executeQuery from '../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('req.body', req.body);
    const result = await executeQuery('SELECT * FROM users');
    console.log('query result', result);
  } catch (error) {
    console.log(error);
  }
}
