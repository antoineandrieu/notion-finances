import { Nordigen } from './nordigen';

const getToken = async () => {
  // @ts-ignore
  const client = Nordigen.getClient();
  await client.generateToken();
};

export default getToken;
