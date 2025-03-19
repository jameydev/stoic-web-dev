import Hero from '@/components/Hero';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
        <Hero />
        <section id='learn-more' className='py-12 px-4 md:px-8 lg:px-12'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              What is Stoic Web Development?
            </h2>
            <p className='text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed'>
              That's a great question! Stoic Web Development is a philosophy
              that combines the ancient wisdom of Stoicism with modern web
              development practices. The goal is to help you build better
              websites and web applications while also improving your mental
              well-being.
            </p>
            <p className='text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed'>
              First and foremost, Stoic Web Development is about building
              websites and web applications that are fast, secure, and reliable.
            </p>
            <p className='text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed'>
              But perhaps most importantly, Stoic Web Development is about
              cultivating a mindset of resilience, self-discipline, and
              gratitude. It's about learning to embrace the things that are
              within your control (your code quality), and let go of the things
              that are not (your supervisor).
            </p>
            <p className='text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed'>
              You can start your journey today by{' '}
              <span className='font-semibold hover:underline'>
                <Link href='/about'>
                  learning more about Stoic Web Development
                </Link>
              </span>{' '}
              and how it can help you become a better web developer.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
