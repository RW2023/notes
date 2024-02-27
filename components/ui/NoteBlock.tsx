'use client';

import React, { FC, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import SubHeading from '@/components/ui/SubHeading';
import LoadingInline from './LoadingInline';

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

const NoteBlock: FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      let { data, error } = await supabase.from('notes').select('*');

      if (error) {
        console.error('Error fetching notes:', error.message);
      } else {
        setNotes(data || []);
      }
      setLoading(false);
    };

    fetchNotes();

    // Subscribe to changes in the notes table
    const notesSubscription = supabase
      .channel('notes-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'notes' },
        (payload) => {
          console.log('Change detected in notes table:', payload);
          // Refresh notes list to reflect the changes
          fetchNotes();
        },
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('Successfully subscribed to changes in notes table.');
        } else {
          console.error('Failed to subscribe to notes table changes:', status);
        }
      });

    // Cleanup on component unmount
    return () => {
      notesSubscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <LoadingInline />;
  }

  return (
    <div>
      <div className="bg-base-200 rounded-md">
        <SubHeading title="Notes to self" />
      </div>
      <div className="bg-base-300">
        {[...notes]
          .sort((a, b) => b.note_id - a.note_id)
          .map((note) => (
            <div
              key={note.note_id}
              className="card-compact shadow-lg border border-1 m-2 p-2"
            >
              <div className="card-body bg-base-200 rounded">
                <p className="text-italic">Note #: {note.note_id}</p>
                <SubHeading title={note.title} />
                <p className="text-lg">{note.note_text}</p>
              </div>
              <div>
                <small>created:</small>
              </div>
              <div>
                <small> {note.created_at}</small>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NoteBlock;
