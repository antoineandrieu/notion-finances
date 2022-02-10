import type { NextApiRequest, NextApiResponse } from 'next';
import getToken from '../../utils/auth';
import { Nordigen } from '../../utils/nordigen';

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // @ts-ignore
  const client = Nordigen.getClient();
  await getToken();
  const body = JSON.parse(req.body);
  try {
    const account = await client.account(body.accountId);
    const transactions = await account.getTransactions();

    res.status(200).json({ data: transactions.transactions });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export default handler;
