'use client';

import React, { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const NoteInput = () => {
  const [title, setTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('notes')
      .insert([{ title, note_text: noteText }]);

    if (error) console.log('error', error);
    else {
      setTitle('');
      setNoteText('');
      console.log('Note added:', data);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="input input-bordered w-full max-w-xs rounded-md"
        />
        <label className="label">
          <span className="label-text">Note</span>
        </label>
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your note here"
          className="textarea textarea-bordered rounded-md w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
