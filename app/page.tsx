import Image from 'next/image';
import { socials } from '@/data/data';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='mt-[200px] flex justify-center mx-6'>
      <section className='bg-white w-profile-card h-profile-card shadow border-2 border-neutral-200 rounded-lg py-6 px-4 flex flex-col items-center text-center'>
        <figure className='relative'>
          <Image
            src='/profile.png'
            alt='User Profile Image'
            className='mb-6'
            width={64}
            height={64}
            priority
          />
          <figcaption className='sr-only'>User Profile Image</figcaption>
        </figure>
        <h1 className='text-xl font-medium text-neutral-900 mb-1'>
          Sarah Dole
        </h1>
        <p className='text-sm font-normal text-neutral-600 mb-6'>
          Front End Engineer @ Microsoft
        </p>
        <p className='text-base font-normal text-netural-600 mb-10'>
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer.
        </p>
        {/* Call to Action Button */}
        <button className='block text-base font-medium text-white bg-indigo-700 w-full rounded px-4 py-[10px] mb-7 hover:bg-[#3730A3] focus:outline-none focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:text-[#A3A3A3]'>
          Contact me
        </button>
        {/* Social Links list */}
        <div className='flex space-x-6'>
          {socials.map(({ id, name, link, icon }) => (
            <Link
              key={id}
              href={link}
              className='text-indigo-700 h-8 w-8 focus:outline-none focus:ring-4 focus:ring-offset-7 focus:ring-indigo-100 focus:rounded-sm hover:bg-[#FAFAFA] hover:rounded-sm flex items-center justify-center'
              aria-label={`Visit my ${name} profile at ${link}`}
            >
              {icon}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

{
  socials.map(({ id, name, link, icon }) => (
    <Link
      key={id}
      href={link}
      className='text-indigo-700 h-5 w-5 focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-indigo-100 focus:rounded-sm hover:ring-offset-8 hover:bg-slate-500 hover:rounded-sm p-2'
      aria-label={`Visit my ${name} profile at ${link}`}
    >
      {icon}
    </Link>
  ));
}
