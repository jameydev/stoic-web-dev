// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white shadow'>
      <nav
        className='container mx-auto px-4 py-4 flex justify-between items-center'
        aria-label='Main Navigation'
      >
        {/* Logo */}
        <Link href='/' className='text-xl font-bold text-gray-900'>
          StoicWebDev
        </Link>

        {/* Navigation Links */}
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='text-gray-600 hover:text-gray-900'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='text-gray-600 hover:text-gray-900'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' className='text-gray-600 hover:text-gray-900'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
