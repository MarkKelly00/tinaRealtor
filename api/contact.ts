import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
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

  // Extract request data
  const { firstName, lastName, email, phone, interest, message } = req.body;
  
  // Validate required fields
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  // Check for API key
  const apiKey = process.env.CLOZE_API_KEY;
  if (!apiKey) {
    console.error('Cloze API key is not configured.');
    return res.status(500).json({ error: 'Server configuration error: Missing API key' });
  }

  // Remove any trailing special characters that might have been added to the API key
  const cleanApiKey = apiKey.replace(/[%\s]+$/, '');

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

  // Log request data for debugging (excluding sensitive info)
  console.log('Contact form submission received:', {
    hasFirstName: !!firstName,
    hasLastName: !!lastName,
    hasEmail: !!email,
    hasPhone: !!phone,
    interest,
  });

  console.log('Sending request to Cloze API...');
  console.log('API Key (first 5 chars):', cleanApiKey.substring(0, 5) + '...');
  
  // Make the API request
  fetch('https://api.cloze.com/v1/people', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${cleanApiKey}`,
    },
    body: JSON.stringify(contactPayload),
  })
    .then(clozeResponse => {
      console.log('Cloze API response status:', clozeResponse.status);
      return clozeResponse.text().then(text => {
        console.log('Cloze API response text:', text.substring(0, 200));
        
        // Try to parse as JSON
        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          console.error('Error parsing Cloze API response:', e);
          throw new Error(`Invalid JSON response: ${text.substring(0, 100)}`);
        }
        
        if (!clozeResponse.ok) {
          throw new Error(`Cloze API error (${clozeResponse.status}): ${JSON.stringify(data)}`);
        }
        
        return data;
      });
    })
    .then(data => {
      console.log('Cloze API success response received');
      return res.status(200).json({ success: true, data });
    })
    .catch(error => {
      console.error('Error submitting to Cloze:', error);
      return res.status(502).json({ 
        success: false, 
        error: 'Failed to submit contact form to Cloze API',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    });
} 