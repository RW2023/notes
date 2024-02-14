'use client';
import { FC, useState } from 'react';
import SubHeading from '../ui/SubHeading';

interface Props {
    // Remove the props property
}

const NoteInput: FC<Props> = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
      <div className="flex flex-col justify-center items-center">
        <SubHeading title="Add a Note" />
        <form className="w-full max-w-xs">
          <div className="mb-4">
            <label
              className="block text-headline text-sm font-bold mb-2"
              htmlFor="note-title"
            >
              Note Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-headline leading-tight focus:outline-none focus:shadow-outline"
              id="note-title"
              type="text"
              placeholder="Your note title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-headline text-sm font-bold mb-2"
              htmlFor="note-text"
            >
              Note Text:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-headline leading-tight focus:outline-none focus:shadow-outline h-48 "
              id="note-text"
              placeholder="Your note text"
              value={text}
              onChange={handleTextChange}
            ></textarea>
            <div className="flex-1 flex-col justify-center items-center">
              <button
                className="bg-green-700 hover:bg-success text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Add Note
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default NoteInput;