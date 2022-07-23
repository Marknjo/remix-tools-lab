import { Link } from '@remix-run/react';

const toolsPath = [
  {
    id: 'text-editor',
    to: '/text-editor',
    text: 'Text Editor',
  },
  // {
  //   id: 'reach-editor',
  //   to: '/reach-editor',
  //   text: 'Reach Editor',
  // },
];

export default function Index() {
  return (
    <div className="grid justify-center fontFamily['system-ui, sans-serif'] lending-6 text-lime-800">
      <h1 className="text-4xl mb-8 border-b border-rose-500/25 px-8 pb-2 mt-3 ">
        List of Tools
      </h1>
      <ul className="flex space-x-4">
        {toolsPath.map(path => (
          <li key={path.id}>
            <Link
              to={path.to}
              className="bg-lime-200 text-lime-800 transition-all border-b-4 border-transparent hover:bg-lime-100 hover:text-lime-900 hover:border-lime-900  py-1 px-4 rounded-sm"
            >
              {path.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
