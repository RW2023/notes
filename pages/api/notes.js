// pages/api/notes.js
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with server-side environment variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export default async function handler(req, res) {
  // Use the Supabase client to fetch data from  'notes' table
  const { data, error } = await supabase.from('notes').select('*');

  if (error) {
    console.error('Error fetching notes:', error.message);
    return res.status(500).json({ error: 'Failed to fetch notes' });
  }

  // Respond with the fetched data
  res.status(200).json(data);
}
