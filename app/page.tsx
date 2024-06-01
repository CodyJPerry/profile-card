import Image from 'next/image';
import { socials } from '@/data/data';
import Link from 'next/link';
import { Ri24HoursFill } from 'react-icons/ri';

// const socials = [
//   {
//     id: 1,
//     name: 'Twitter',
//     link: 'https://twitter.com/sarahdole',
//     icon: <Ri24HoursFill />,
//   },
// ];

export default function Home() {
  return (
    <main className='mt-[200px] flex justify-center'>
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
        <button className='block text-base font-medium text-white bg-indigo-700 w-full rounded px-4 py-[10px] mb-8'>
          Contact me
        </button>
        {/* Social Links list */}
        <div className='flex space-x-7'>
          {socials.map(({ id, name, link, icon }) => (
            <Link key={id} href={link}>
              {icon}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
