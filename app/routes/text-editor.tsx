import { Link } from '@remix-run/react';

export default function TextEditor() {
  return (
    <div>
      <main>
        <h1>This is the default text editor</h1>
      </main>

      <div>
        <Link
          to="/"
          className="text-lime-500 font-semibold transition-all border-b-4 border-transparent hover:border-lime-500  py-1 px-2"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
