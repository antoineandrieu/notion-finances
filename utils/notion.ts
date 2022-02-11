import { Client } from '@notionhq/client';

export namespace Notion {
  const client = new Client({
    auth: process.env.NOTION_SECRET,
  });
  export function getClient() {
    return client;
  }
}
