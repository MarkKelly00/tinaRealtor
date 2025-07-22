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
    console.error('Cloze API key is not configured.');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const contactPayload = {
    name: `${firstName || ''} ${lastName || ''}`.trim(),
    emails: [{ value: email, type: 'work', preferred: true }],
    phones: phone ? [{ value: phone, type: 'mobile' }] : [],
    customFields: [
        ...(interest ? [{ uniqueid: 'contact_form_interest', value: interest }] : []),
        ...(message ? [{ uniqueid: 'contact_form_message', value: message }] : [])
    ]
  };

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
      console.error('Cloze API Error:', errorBody);
      throw new Error(`Cloze API responded with status ${clozeResponse.status}`);
    }

    const clozeData = await clozeResponse.json();
    return res.status(200).json({ success: true, data: clozeData });
  } catch (error) {
    console.error('Error submitting to Cloze:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ success: false, error: errorMessage });
  }
} 