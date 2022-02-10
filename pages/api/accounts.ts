import type { NextApiRequest, NextApiResponse } from 'next';
import getToken from '../../utils/auth';
import { Nordigen } from '../../utils/nordigen';

const COUNTRY = 'FR';

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // @ts-ignore
  const client = Nordigen.getClient();
  await getToken();
  const body = JSON.parse(req.body);
  try {
    const requisitionData = await client.requisition.getRequisitionById(
      body.requisitionId
    );

    const accounts = await Promise.all(
      requisitionData.accounts.map(async (accountId: any) => {
        const account = await client.account(accountId);
        const accountData = await account.getDetails();
        return { id: accountId, name: accountData.account.name };
      })
    );

    res.status(200).json({ data: accounts });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export default handler;
