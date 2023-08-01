import { nanoid } from 'nanoid';
import { AiFillHome, AiTwotoneCode, AiFillAppstore } from 'react-icons/ai';
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsLinkedin,
} from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { SiGmail, SiTwitter } from 'react-icons/si';
import {
  JsImg,
  htmlImg,
  cssImg,
  tailwindImg,
  reactImg,
  sassImg,
  nodeImg,
  figmaImg,
  bootstrapImg,
  postgresqlImg,
} from './assets/img/skills';

export const navigationLinks = [
  { htmlID: 'home', text: 'home', id: nanoid(), icon: <AiFillHome /> },
  { htmlID: 'skills', text: 'skills', id: nanoid(), icon: <AiTwotoneCode /> },
  {
    htmlID: 'projects',
    text: 'projects',
    id: nanoid(),
    icon: <AiFillAppstore />,
  },
  {
    htmlID: 'about-me',
    text: 'about me',
    id: nanoid(),
    icon: <BsFillPersonFill />,
  },
  {
    htmlID: 'contact',
    text: 'contact',
    id: nanoid(),
    icon: <BsFillTelephoneFill />,
  },
];

export const skills = [
  {
    skillName: 'HTML',
    skillIcon: htmlImg,
    id: nanoid(),
  },
  {
    skillName: 'CSS',
    skillIcon: cssImg,
    id: nanoid(),
  },
  {
    skillName: 'JavaScript',
    skillIcon: JsImg,
    id: nanoid(),
  },
  {
    skillName: 'React.js',
    skillIcon: reactImg,
    id: nanoid(),
  },
  {
    skillName: 'Node.js',
    skillIcon: nodeImg,
    id: nanoid(),
  },
  {
    skillName: 'PostgreSQL',
    skillIcon: postgresqlImg,
    id: nanoid(),
  },
  {
    skillName: 'Tailwind CSS',
    skillIcon: tailwindImg,
    id: nanoid(),
  },
  {
    skillName: 'Bootstrap',
    skillIcon: bootstrapImg,
    id: nanoid(),
  },
  {
    skillName: 'SASS',
    skillIcon: sassImg,
    id: nanoid(),
  },

  {
    skillName: 'Figma',
    skillIcon: figmaImg,
    id: nanoid(),
  },
];

export const projects = [
  { projectTitle: '', projectUrl: '', sourceCode: '' },
  { projectTitle: '', projectUrl: '', sourceCode: '' },
  { projectTitle: '', projectUrl: '', sourceCode: '' },
];

export const personalInfo = {
  th: {
    name: 'นาซาอี',
    lastName: 'หมัดอะดัม',
    yearOfBirth: 1992,
    address: {
      alley: 'พัฒนาการ 69',
      road: 'พัฒนาการ',
      subDistrict: 'ประเวศ',
      district: 'ประเวศ',
      province: 'กรุงเทพ',
    },
    resume: 'PDF',
    graduationCertificate: 'PDF',
    certificate: [
      { certificateName: '', certificateImg: '', certificateDescription: '' },
      { certificateName: '', certificateImg: '', certificateDescription: '' },
      { certificateName: '', certificateImg: '', certificateDescription: '' },
    ],
  },
  en: {
    name: 'Nasa-ee',
    lastName: 'Madadam',
    yearOfBirth: 1992,
    address: {
      alley: 'Phatthanakan  69',
      road: 'Phatthanakan ',
      subDistrict: 'Prawet',
      district: 'Prawet',
      province: 'Bangkok',
    },

    resume: 'PDF',
    graduationCertificate: 'PDF',
    certificate: [
      { certificateName: '', certificateImg: '', certificateDescription: '' },
      { certificateName: '', certificateImg: '', certificateDescription: '' },
      { certificateName: '', certificateImg: '', certificateDescription: '' },
    ],
  },
};

export const socials = [
  {
    name: 'Github',
    url: 'https://github.com/Nasaee',
    icon: <FaGithub />,
    id: nanoid(),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/nasaee.madadam',
    icon: <GrFacebook />,
    id: nanoid(),
  },
  {
    name: 'LinkIN',
    url: 'https://www.linkedin.com/in/nasa-ee-madadam-b3a0b7272/',
    icon: <BsLinkedin />,
    id: nanoid(),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/nasa_ee',
    icon: <SiTwitter />,
    id: nanoid(),
  },
  {
    name: 'Email',
    url: 'nasaee.dev@gmail.com',
    icon: <SiGmail />,
    id: nanoid(),
  },
];

export const contectMe = {
  phone: '0831841131',
  email: 'nasaee.dev@gmail.com',
  facebook: 'https://www.facebook.com/nasaee.madadam',
  linkIn: 'https://www.linkedin.com/in/nasa-ee-madadam-b3a0b7272/',
};
