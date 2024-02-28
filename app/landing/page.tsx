import Layout from '@/components/layout';
import NoteGridDisplay from '@/components/ui/NotesGridDisplay';
import { FC } from 'react';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    
    <Layout>
      <NoteGridDisplay />
    </Layout>
  );
};

export default page;