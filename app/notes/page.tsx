//src/pages/notes/index.tsx
import Layout from '@/components/layout';
import { FC } from 'react';
import NoteGridDisplay from '@/components/ui/NotesGridDisplay';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    
      <Layout>
   <NoteGridDisplay />
      </Layout>
    
  );
};

export default page;