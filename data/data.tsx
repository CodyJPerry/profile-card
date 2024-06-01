import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from 'react-icons/ri';

export const socials = [
  {
    id: 1,
    name: 'Github',
    link: '',
    icon: <RiGithubFill className='h-6 w-6' />,
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: '',
    icon: <RiLinkedinBoxFill className='w-6 h-6' />,
  },
  {
    id: 3,
    name: 'Instagram',
    link: '',
    icon: <RiInstagramFill className='w-6 h-6' />,
  },
  {
    id: 4,
    name: 'Twitter',
    link: '',
    icon: <RiTwitterXFill className='w-6 h-6' />,
  },
];
