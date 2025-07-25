import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Return a simple JSON response
    return res.status(200).json({
      success: true,
      message: 'API is working',
      timestamp: new Date().toISOString(),
      env: {
        hasApiKey: !!process.env.CLOZE_API_KEY,
        nodeEnv: process.env.NODE_ENV || 'unknown'
      }
    });
  } catch (error) {
    console.error('Error in test endpoint:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 