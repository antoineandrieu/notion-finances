import NordigenClient from 'nordigen-node';

export namespace Nordigen {
  const client = new NordigenClient({
    secretId: process.env.NORDIGEN_SECRET_ID,
    secretKey: process.env.NORDIGEN_SECRET_KEY,
  });
  export function getClient() {
    return client;
  }
}
