import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'http://lsvpndebian.duckdns.org:8081/api/posts';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }

  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: {
        'x-api-key': API_KEY!,
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json(response.data);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(`Proxy error (post ${id}):`, err.response?.data || err.message);
      res.status(err.response?.status || 500).json({ error: 'Failed to fetch post' });
    } else {
      console.error(`Unknown error (post ${id}):`, err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}