import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method Not Allowed' });
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
    console.log('API Key (first 5 chars):', cleanApiKey.substring(0, 5) + '...');
    
    try {
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

      let responseText = '';
      try {
        responseText = await clozeResponse.text();
        console.log('Cloze API response text:', responseText.substring(0, 200));
      } catch (textError) {
        console.error('Error reading response text:', textError);
      }

      let responseData;
      try {
        // Try to parse the response as JSON
        responseData = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Error parsing Cloze API response:', parseError);
        return res.status(502).json({ 
          success: false, 
          error: `Invalid response from Cloze API (${clozeResponse.status})`,
          details: responseText.substring(0, 500)
        });
      }

      if (!clozeResponse.ok) {
        console.error('Cloze API Error:', responseData);
        return res.status(502).json({ 
          success: false, 
          error: `Cloze API responded with status ${clozeResponse.status}`,
          details: responseData
        });
      }

      console.log('Cloze API success response received');
      return res.status(200).json({ success: true, data: responseData });
    } catch (fetchError) {
      console.error('Fetch error when calling Cloze API:', fetchError);
      return res.status(502).json({ 
        success: false, 
        error: 'Failed to connect to Cloze API',
        details: fetchError instanceof Error ? fetchError.message : 'Unknown error'
      });
    }
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ success: false, error: errorMessage });
  }
} 