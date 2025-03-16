// components/Footer.tsx
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-gray-200 py-6'>
      <div className='container mx-auto px-4 text-center'>
        <p className='mb-2'>
          &copy; {new Date().getFullYear()} Stoic Web Developers
        </p>
        <nav aria-label='Footer Navigation'>
          <ul className='flex justify-center space-x-4'>
            <li>
              <a href='/privacy' className='hover:text-white'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/terms' className='hover:text-white'>
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
