import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { firstName, lastName, email, phone, interest, message } = req.body;
  const apiKey = process.env.CLOZE_API_KEY;

  if (!apiKey) {
    console.error('SERVER ERROR: Cloze API key is not configured in Vercel environment variables.');
    return res.status(500).json({ success: false, error: 'Server configuration error. API key is missing.' });
  }

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required.' });
  }

  const contactPayload = {
    name: `${firstName || ''} ${lastName || ''}`.trim(),
    emails: [{ value: email, type: 'work', preferred: true }],
    phones: phone ? [{ value: phone, type: 'mobile' }] : [],
    customFields: [
        ...(interest ? [{ id: 'form_interest', value: interest }] : []),
        ...(message ? [{ id: 'form_message', value: message }] : [])
    ]
  };

  console.log('Sending payload to Cloze:', JSON.stringify(contactPayload, null, 2));

  try {
    const clozeResponse = await fetch('https://api.cloze.com/api/v1/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(contactPayload),
    });

    if (!clozeResponse.ok) {
      const errorBody = await clozeResponse.text();
      console.error('CLOZE API ERROR: Cloze responded with a non-OK status.');
      console.error('CLOZE API Status:', clozeResponse.status);
      console.error('CLOZE API Response Body:', errorBody);
      throw new Error(`Cloze API responded with status ${clozeResponse.status}`);
    }

    const clozeData = await clozeResponse.json();
    return res.status(200).json({ success: true, data: clozeData });
  } catch (error) {
    console.error('INTERNAL FUNCTION ERROR: Error submitting to Cloze:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ success: false, error: errorMessage });
  }
} 