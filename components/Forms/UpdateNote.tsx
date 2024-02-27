'use client';
import { FC, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import SubHeading from '@/components/ui/SubHeading';

// Initialize Supabase client
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
);

interface Props {}

const UpdateNoteForm: FC<Props> = (): JSX.Element => {
  // State for managing form and component state
  const [isUpdateMode, setIsUpdateMode] = useState(true); // Toggle between update and delete
  const [noteId, setNoteId] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Handle form submission for both update and delete actions
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform action based on the current mode
    if (isUpdateMode) {
      const { data, error } = await supabase
        .from('notes')
        .update({ title: noteTitle, note_text: noteText })
        .eq('note_id', noteId);

      if (error) {
        setMessage('Error updating note: ' + error.message);
        setIsError(true);
      } else {
        setMessage('Note updated successfully!');
        setIsError(false);
        // Optionally, clear the form fields after a successful update
        setNoteId('');
        setNoteTitle('');
        setNoteText('');
      }
    } else {
      // Delete note logic
      const { data, error } = await supabase
        .from('notes')
        .delete()
        .eq('note_id', noteId);

      if (error) {
        setMessage('Error deleting note: ' + error.message);
        setIsError(true);
      } else {
        setMessage('Note deleted successfully!');
        setIsError(false);
        // Clear the form fields after a successful deletion
        setNoteId('');
        setNoteTitle('');
        setNoteText('');
      }
    }
  };

  // Toggle mode between update and delete
  const toggleMode = () => setIsUpdateMode(!isUpdateMode);

  return (
    <>
      <div className="border-border border-1 rounded p-3 bg-base-200 m-3">
        <SubHeading title={isUpdateMode ? 'Update Note' : 'Delete Note'} />
        <button onClick={toggleMode} className="btn btn-secondary mt-3">
          Switch to {isUpdateMode ? 'Delete' : 'Update'} Mode
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="form-control w-full max-w-xs mx-auto border-border border-2 rounded p-3 bg-base-300 m-3"
      >
        {message && (
          <div
            className={`alert ${
              isError ? 'alert-error' : 'alert-success'
            } mb-4`}
          >
            {message}
          </div>
        )}
        <div className="form-group mb-4">
          <label htmlFor="noteId" className="label">
            <span className="label-text">Note ID:</span>
          </label>
          <input
            type="text"
            id="noteId"
            className="input input-bordered w-full"
            value={noteId}
            onChange={(e) => setNoteId(e.target.value)}
          />
        </div>
        {isUpdateMode && (
          <>
            <div className="form-group mb-4">
              <label htmlFor="noteTitle" className="label">
                <span className="label-text">Note Title:</span>
              </label>
              <input
                type="text"
                id="noteTitle"
                className="input input-bordered w-full"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="noteText" className="label">
                <span className="label-text">Note Text:</span>
              </label>
              <textarea
                id="noteText"
                className="textarea textarea-bordered w-full"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
            </div>
          </>
        )}
        <button type="submit" className="btn btn-primary w-full">
          {isUpdateMode ? 'Update Note' : 'Delete Note'}
        </button>
      </form>
    </>
  );
};

export default UpdateNoteForm;
