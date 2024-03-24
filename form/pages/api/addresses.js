// pages/api/addresses.js

let entries = []; // This will hold our entries in-memory

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Add a new entry
    const entry = req.body;
    entries.push(entry); // Push the new entry into our array
    return res.status(201).json(entry); // Respond with the added entry
  } else if (req.method === 'GET') {
    // Return all entries
    return res.status(200).json(entries);
  }

  // Handle any other HTTP method
  return res.setHeader('Allow', ['GET', 'POST'])
             .status(405)
             .end(`Method ${req.method} Not Allowed`);
}
