'use client';

import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type Note = {
  note_id: number;
  title: string;
  note_text: string;
  created_at: string;
};

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchNotes = async () => {
      let { data: fetchedNotes, error } = await supabase
        .from('notes')
        .select('*');

      if (error) {
        console.log('error', error);
      } else {
        // Check if fetchedNotes is not null before setting the state
        if (fetchedNotes) {
          setNotes(fetchedNotes);
        }
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.note_id} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">{note.title}</h3>
            <p>{note.note_text}</p>
            <div className="card-actions justify-end">
              <small>{new Date(note.created_at).toLocaleString()}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
