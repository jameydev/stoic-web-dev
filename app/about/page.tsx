export default function AboutPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
        {/* About Section */}
        <section className='py-12 px-4 md:px-8 lg:px-12'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-6'>
              About Us
            </h1>
            <article className='prose prose-lg mx-auto text-gray-300 leading-relaxed'>
              <p className='text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed'>
                So how does one become a Stoic Web Developer? Well, it all
                starts with a commitment to building better websites and web
                applications. But it doesn't end there. Stoic Web Development
                cultivates a mindset of resilience, self-discipline, and
                gratitude.
              </p>
              <p className='text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed'>
                The Stoic Web Developer is someone who embraces the things that
                are within their control (their code quality), and lets go of
                the things that are not (their supervisor). They are someone who
                understands that the only way to build great software is to
                continuously improve their skills and knowledge.
              </p>
              <p className='text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed'>
                All that being said, here are the core principles of Stoic Web
                Development:
              </p>
              <ul className='text-lg md:text-xl text-gray-300 m-4 md:m-6 list-disc'>
                <li className='mb-2 md:mb-4'>
                  Build fast, secure, and reliable websites and applications
                  (what we call Virtuous Software)
                </li>
                <li className='mb-2 md:mb-4'>
                  Embrace the things that are within your control
                </li>
                <li className='mb-2 md:mb-4'>
                  Let go of the things that are not in your control
                </li>
                <li className='mb-2 md:mb-4'>
                  Continuously improve your skills and knowledge
                </li>
                <li className='mb-2 md:mb-4'>
                  In all interactions with your code and other developers and
                  team members, practice the virtues of wisdom, courage,
                  justice, and temperance. Additionally, take care to
                  communicate clearly and effectively.
                </li>
                <li className='mb-2 md:mb-4'>
                  Cultivate a mindset of resilience, self-discipline, and
                  gratitude
                </li>
                <li className='mb-2 md:mb-4'>Help others improve too!</li>
                <li className='mb-2 md:mb-4'>Think outside the box</li>
                <li className='mb-2 md:mb-4'>Use agile methodology</li>
                <li className='mb-2 md:mb-4'>Use version control</li>
                <li className='mb-2 md:mb-4'>Write clean code</li>
                <li className='mb-2 md:mb-4'>Stay organized</li>
                <li className='mb-2 md:mb-4'>Remain calm and rational</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
