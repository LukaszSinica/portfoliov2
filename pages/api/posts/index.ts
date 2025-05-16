import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = 'http://lsvpndebian.duckdns.org:8081/api/posts';
const API_KEY = process.env.API_KEY;

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, search } = req.query;

  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-api-key': API_KEY!,
        'Content-Type': 'application/json',
      },
      params: {
        page,
        search,
      },
    });

    res.status(200).json(response.data);
  } catch (err: any) {
    console.error('Proxy error (posts):', err.response?.data || err.message);
    res.status(err.response?.status || 500).json({ error: 'Failed to fetch posts' });
  }
}