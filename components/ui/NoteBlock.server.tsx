// NoteBlock.server.tsx
import React from 'react';

import SubHeading from './SubHeading';


// Define the TypeScript type for notes
type Note = {
  note_id: number;
  title: string;
  note_text: string;
  created_at: string;
};

// Async function to fetch notes from an API
async function fetchNotes(): Promise<Note[]> {
  // Utilizing Next.js's enhanced fetch API with caching and revalidating options
  const response = await fetch('http://localhost:3000/api/notes', {
    // Revalidation options
      // Revalidation options
    cache: 'force-cache', // Force the result to be from the HTTP cache
    next: {
      revalidate: 3600, // Revalidate data every hour
      tags: ['notesCollection'], // Tag this request for possible on-demand revalidation
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch notes');
  }

  return response.json();
}

// NoteBlock server component
export default async function NoteBlock() {
  let notes: Note[];
  try {
    notes = await fetchNotes();
  } catch (error) {
    console.error('Failed to fetch notes:', error);
    // Render an error state or fallback content
    return <div>Failed to load notes.</div>;
  }

  // Render the notes
  return (
    <div>
      <div className="bg-base-200 rounded-md text-base-content">
        <SubHeading title="Notes to self" />
      </div>
      <div className="bg-base-300">
        {notes
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
}
