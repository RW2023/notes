import { FC } from 'react';

interface Props {}

const Landing: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 bg-base-300 p-4 rounded-md drop-shadow-md">
      <div className="w-full border-2 rounded-md p-2 flex flex-col justify-center items-center">
        <div className="title p-4 border border-1 rounded-md bg-black w-full">
          <h2 className="text-3xl text-headline text-center">div 1</h2>
        </div>
        <div className="content h-full m-2">
          <p>Content for the card body</p>
          <img
            className="rounded-md bg-black p-2 border-2 border-headline"
            width={300}
            height={300}
            src="https://source.unsplash.com/random"
            alt="Unsplash Image"
          />
        </div>
        <div className="content h-full"></div>
      </div>
      <div className="w-full border-2 rounded-md p-2 flex flex-col justify-center items-center">
        <div className="title p-4 border border-1 rounded-md bg-black w-full">
          <h2 className="text-3xl text-gray-300 text-center">div 2</h2>
        </div>
        <div className="content h-full m-2">
          <p>Content for the card body</p>
          <img
            className="rounded-md bg-black p-2 border-2 border-white"
            width={300}
            height={300}
            src="https://source.unsplash.com/random"
            alt="Unsplash Image"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Landing;
