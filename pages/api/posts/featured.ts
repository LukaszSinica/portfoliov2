import type { NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = 'http://lsvpndebian.duckdns.org:8081/api/posts/featured';
const API_KEY = process.env.API_KEY;

export default async function GET(req: Request, res: NextApiResponse) {
    console.log('hello')
  try {
    const { data } = await axios.get(API_URL, {
      headers: {
        'x-api-key': API_KEY!,
        'Content-Type': 'application/json',
      }
    });

    res.status(200).json(data);
  } catch (err: any) {
    console.error('Proxy error:', err.response?.data || err.message);
    res.status(err.response?.status || 500).json({ error: 'Failed to fetch posts' });
  }
}