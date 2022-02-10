import { randomUUID } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import getToken from '../../utils/auth';
import { Nordigen } from '../../utils/nordigen';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  const client = Nordigen.getClient();
  await getToken();
  let init;
  try {
    const body = JSON.parse(req.body);
    init = await client.initSession({
      redirectUrl: process.env.HOST,
      institutionId: body.bank,
      referenceId: randomUUID(),
    });
    const link = init.link;
    const requisitionId = init.id;
    res.status(200).json({ data: { link, requisitionId } });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export default handler;
