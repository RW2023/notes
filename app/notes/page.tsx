import NoteInput from '@/components/Forms/NoteInput';
import NoteList from '@/components/ui/NoteList';
import { FC } from 'react';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex flex-row">
      <div className="flex-1 p-3">
        <NoteInput />
      </div>
      <div className="flex-1 p-3">
        <NoteList />
      </div>
    </div>
  );
};

export default page;