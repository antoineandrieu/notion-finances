import type { NextApiRequest, NextApiResponse } from 'next';
import NordigenClient from 'nordigen-node';

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const client = new NordigenClient({
    secretId: process.env.SECRET_ID,
    secretKey: process.env.SECRET_KEY,
  });

  // If you have existing token
  // client.setToken(process.env.TOKEN);

  // create new access token
  const data = await client.generateToken();
  res.status(200).json({ name: 'John Doe' });
};

export default handler;
