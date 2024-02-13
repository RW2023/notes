'use client';
import { FC, useState } from 'react';

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
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form className="w-full max-w-xs">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="note-title"
            >
              Note Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="note-title"
              type="text"
              placeholder="Your note title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="note-text"
            >
              Note Text:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="note-text"
              placeholder="Your note text"
              value={text}
              onChange={handleTextChange}
            ></textarea>
          </div>
        </form>
      </div>
    );
};

export default NoteInput;