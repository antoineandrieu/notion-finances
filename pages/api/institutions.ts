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
  let institutions;
  try {
    institutions = await client.institution.getInstitutions({
      country: COUNTRY,
    });
  } catch (error) {
    console.error(error);
  }
  console.log(institutions);
  res.status(200).json({ name: 'John Doe' });
};

export default handler;
