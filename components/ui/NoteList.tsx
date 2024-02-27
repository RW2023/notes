import { FC } from 'react';
import NoteBlock from './NoteBlock';

interface Props {}

const NoteList: FC<Props> = (props): JSX.Element => {
  return (
    <NoteBlock />
  );
};

export default NoteList;