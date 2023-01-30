import Link from 'next/link';
import { BiStore } from 'react-icons/bi';

export const ContinueShopping = () => {
  return (
    <ul className="border border-l-0 border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/"
          title="Continue Shopping"
          className="w-20 h-20 flex justify-center items-center text-2xl hover:text-xl"
        >
          <BiStore />
        </Link>
      </li>
    </ul>
  );
};
