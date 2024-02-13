import { FC } from 'react';

interface Props {}

const Landing: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container grid grid-cols-2 gap-3">
      <div className="w-full border-2 rounded-md p-2">
        <div className="title">
          <h2>div 1</h2>
        </div>
        <div className="content h-full">
          <p>Content for the card body</p>
        </div>
      </div>
      <div className="w-full border-2 rounded-md p-2">
        <div className="title">
          <h2>div 2</h2>
        </div>
        <div className="content h-full">
          <p>Content for the card body</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;