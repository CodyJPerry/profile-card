import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from 'react-icons/ri';

interface Socials {
  id: number;
  name: string;
  link: string;
  icon: JSX.Element;
}

export const socials: Socials[] = [
  {
    id: 1,
    name: 'Github',
    link: '',
    icon: <RiGithubFill className='h-5 w-5' />,
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: '',
    icon: <RiLinkedinBoxFill className='w-5 h-5' />,
  },
  {
    id: 3,
    name: 'Instagram',
    link: '',
    icon: <RiInstagramFill className='w-5 h-5' />,
  },
  {
    id: 4,
    name: 'Twitter',
    link: '',
    icon: <RiTwitterXFill className='w-5 h-5' />,
  },
];
