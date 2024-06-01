import Image from 'next/image';

export default function Home() {
  return (
    <main className='mt-[200px] flex justify-center'>
      <section className='bg-white w-profile-card h-profile-card shadow border-2 border-neutral-200 rounded-lg py-6 px-4'>
        <figure className='relative'>
          <Image
            src='/profile.png'
            alt='User Profile Image'
            width={64}
            height={64}
            priority
          />
          <figcaption className='sr-only'>User Profile Image</figcaption>
        </figure>
        <h1 className='text-xl font-medium text-neutral-900'>Sarah Dole</h1>
        <p className='text-sm font-normal text-neutral-600'>
          Front End Engineer @ Microsoft
        </p>
        <p className='text-base font-normal text-netural-600'>
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer.
        </p>
        {/* Call to Action Button */}
        <button className='block text-base font-medium text-white bg-indigo-700 w-full rounded'>
          Contact Me
        </button>
        {/* Social Links list */}
        <div>{/* Look over list */}</div>
      </section>
    </main>
  );
}
