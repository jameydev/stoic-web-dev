// app/about/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-grow'>
        {/* About Section */}
        <section className='py-12 px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-6'>
              About Us
            </h1>
            <article className='prose prose-lg mx-auto text-gray-700'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <p>
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere. In sit amet convallis
                urna. Quisque dictum, risus sit amet consequat venenatis, ex
                ante dignissim tellus, non efficitur libero ante in elit.
              </p>
              <p>
                Praesent sed elementum mauris. Nam ultrices, urna ut suscipit
                condimentum, arcu nibh aliquet magna, sit amet sollicitudin
                mauris libero vel velit. Curabitur ac aliquam libero. Sed quis
                sapien nec massa volutpat tincidunt.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
