import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { firstName, lastName, email, phone, interest, message } = req.body;
    const apiKey = process.env.CLOZE_API_KEY;

    // Log request data for debugging (excluding sensitive info)
    console.log('Contact form submission received:', {
      hasFirstName: !!firstName,
      hasLastName: !!lastName,
      hasEmail: !!email,
      hasPhone: !!phone,
      interest,
    });

    if (!apiKey) {
      console.error('Cloze API key is not configured.');
      return res.status(500).json({ error: 'Server configuration error: Missing API key' });
    }

    // Remove any trailing special characters that might have been added to the API key
    const cleanApiKey = apiKey.replace(/[%\s]+$/, '');

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    // Format the payload according to Cloze API documentation
    const contactPayload = {
      name: `${firstName || ''} ${lastName || ''}`.trim(),
      emails: [{ 
        value: email, 
        work: true 
      }],
      phones: phone ? [{ 
        value: phone, 
        mobile: true 
      }] : [],
      customFields: [
        ...(interest ? [{ id: 'contact_form_interest', type: 'text', value: interest }] : []),
        ...(message ? [{ id: 'contact_form_message', type: 'text', value: message }] : [])
      ]
    };

    console.log('Sending request to Cloze API...');
    
    // Updated endpoint to match Cloze API documentation
    const clozeResponse = await fetch('https://api.cloze.com/v1/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${cleanApiKey}`,
      },
      body: JSON.stringify(contactPayload),
    });

    console.log('Cloze API response status:', clozeResponse.status);

    if (!clozeResponse.ok) {
      const errorBody = await clozeResponse.text();
      console.error('Cloze API Error:', errorBody);
      return res.status(502).json({ 
        success: false, 
        error: `Cloze API responded with status ${clozeResponse.status}`,
        details: errorBody
      });
    }

    const clozeData = await clozeResponse.json();
    console.log('Cloze API success response received');
    return res.status(200).json({ success: true, data: clozeData });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ success: false, error: errorMessage });
  }
} 