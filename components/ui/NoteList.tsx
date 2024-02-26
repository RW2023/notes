'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import SubHeading from '@/components/ui/SubHeading';
import Loading from './Loading';
import LoadingInline from './LoadingInline';
import UpdateNote from '../Forms/UpdateNote';

type Note = {
  note_id: number;
  title: string;
  note_text: string;
  created_at: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    let { data, error } = await supabase.from('notes').select('*');

    if (error) {
      console.error('Error fetching notes:', error.message);
    } else {
      setNotes(data || []);
    }
    setLoading(false);
  };

  if (loading) {
    return <LoadingInline />;
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note.note_id}>
          <SubHeading title={note.title} />
          <p>{note.note_text}</p>
          <small>{new Date(note.created_at).toLocaleString()}</small>
        </div>
      ))}
      <UpdateNote />
    </div>
  );
};

export default NoteList;
