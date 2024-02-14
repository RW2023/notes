import { FC } from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';

interface Props {}

const NoteList: FC<Props> = (props): JSX.Element => {
    const notes = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5']
  return (
  <div>
      <div>
        <SubHeading title='Note List' />
        <ul>
            {notes.map((note, index) => (
                <li key={index}>{note}</li>
            ))}
        </ul>
      </div>
  </div>
  );
};

export default NoteList;