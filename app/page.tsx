import { FC } from 'react';
import Link from 'next/link';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(/hero.webp)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Note to Self</h1>
          <p className="mb-5">
            Welcome to Note to Self. This is a simple note taking app.
          </p>
          <Link
          href="/login"
          ><button type='submit' className="btn btn-primary">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default page;