import { FC } from 'react';
import NoteInput from '../Forms/NoteInput';
import NoteList from './NoteList';
import UpdateNoteForm from '../Forms/UpdateNote';

interface Props {}

const Landing: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 bg-base-300 p-4 rounded-md drop-shadow-md">
      <div className="col-span-1 lg:col-span-2 w-full border-2 rounded-md p-2 flex flex-col justify-center items-center">
        <div className="title p-4 border border-1 rounded-md bg-black w-full">
          <h2 className="text-3xl text-headline text-center">Enter Notes</h2>
        </div>
        <div className="content h-full m-2 overflow-auto">
          <NoteInput />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 w-full border-2 rounded-md p-2 flex flex-col justify-center items-center">
        <div className="title p-4 border border-1 rounded-md bg-black w-full">
          <h2 className="text-3xl text-gray-300 text-center">Notes</h2>
        </div>
        <div className="content h-full m-2">
          <NoteList />
        </div>
        <UpdateNoteForm />
      </div>
    </div>
  );
};

export default Landing;
