// components/Hero.tsx
export default function Hero() {
  return (
    <section
      className='relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20'
      aria-label='Hero Section'
    >
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Stoic Web Developers
        </h1>
        <p className='text-lg md:text-2xl mb-8'>
          Virtuously building websites and web applications with excellence,
          resilience, self-discipline, and gratitude
        </p>
        <a
          href='#learn-more'
          className='inline-block bg-white text-blue-500 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
