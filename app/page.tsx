// app/page.tsx
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
        <Hero />
        <section id='learn-more' className='py-12 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              What is Stoic Web Development?
            </h2>
            <p className='text-lg text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Nunc vitae diam nec arcu facilisis tincidunt. Integer
              aliquam ullamcorper sapien, non efficitur metus.
            </p>
            <p className='text-lg text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Nunc vitae diam nec arcu facilisis tincidunt. Integer
              aliquam ullamcorper sapien, non efficitur metus.
            </p>
            <p className='text-lg text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Nunc vitae diam nec arcu facilisis tincidunt. Integer
              aliquam ullamcorper sapien, non efficitur metus.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
