import type { NextApiRequest, NextApiResponse } from 'next';
import { Notion } from '../../utils/notion';

type Data = {
  name: string;
};

const createDatabase = async (client) => {
  const response = await client.databases.create({
    parent: { page_id: 'f96d3f6997f54b349135ced4bf9e79b9' },
    title: [{ text: { content: 'Transactions' } }],
    properties: {
      Date: {
        date: {},
      },
      Name: {
        title: {},
      },
      Amount: {
        number: {
          format: 'euro',
        },
      },
    },
  });
  return response;
};

const updateDatabase = async (client, body) => {
  console.log(body);
  const response = await client.pages.create({
    parent: { database_id: process.env.NOTION_DB_ID },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: 'Tuscan Kale',
            },
          },
        ],
      },
    },
  });
  return response;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const client = Notion.getClient();
  if (req.method === 'POST') {
    const response = await createDatabase(client);
    console.log(response);
    // store the database id in the database
    await updateDatabase(client);
    res.status(200).json({});
  } else if (req.method === 'PATCH') {
    const body = JSON.parse(req.body);
    const response = await updateDatabase(client, body);
    console.log(response);
    res.status(200).json({});
  } else {
    res.status(405);
  }
};

export default handler;
