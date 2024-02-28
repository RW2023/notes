import { FC } from 'react';
import NoteInput from '../Forms/NoteInput';
import NoteList from './NoteList';
import UpdateNoteForm from '../Forms/UpdateNote';

interface Props {}

const NoteGridDisplay: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-300">
      <div className="container p-4 rounded-md drop-shadow-md max-w-6xl">
        {' '}
        {/* Adjust max-w as needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* "Enter Notes" section */}
          <div className="mb-4 flex flex-col">
            <div className="p-4 bg-black rounded-md w-full mb-4">
              <h2 className="text-3xl text-headline text-center">
                Enter Notes
              </h2>
            </div>
            <div className="flex-grow m-2 overflow-auto">
              <NoteInput />
            </div>
          </div>

          {/* "Notes" section */}
          <div className="mb-4 flex flex-col">
            <div className="p-4 bg-black rounded-md w-full mb-4">
              <h2 className="text-3xl text-gray-300 text-center">Notes</h2>
            </div>
            <div className="flex-grow m-2 overflow-auto">
              <NoteList />
            </div>
          </div>
        </div>
        {/* "Update Note" form, full width below the two columns */}
        <div className="mt-4 w-full mx-auto">
          <UpdateNoteForm />
        </div>
      </div>
    </div>
  );
};

export default NoteGridDisplay;
