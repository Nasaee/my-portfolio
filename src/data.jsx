import { nanoid } from 'nanoid';
import { differenceInYears } from 'date-fns';
import { AiFillHome, AiTwotoneCode, AiFillAppstore } from 'react-icons/ai';
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsLinkedin,
} from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ImPhone } from 'react-icons/im';

import {
  JsImg,
  htmlImg,
  cssImg,
  tailwindImg,
  reactImg,
  nodeImg,
  typescriptImg,
  expressImg,
  // sqlImg,
  dockerImg,
  // graphQlImg,
  // linuxImg,
  postgresqlImg,
  mongoDBImg,
  prismaImg,
  nextImg,
  nestImg,
  reduxImg,
  reduxSagaImg,
  zodImg,
  reactHookFormImg,
  reactQueryIcon,
  // goImg,
} from './assets/img/skills';

import {
  techHubImg,
  portfolioImg,
  fitnessHubImg,
  claimTracking,
} from './assets/img/projects';

import {
  htmlCssCertificatePDF,
  htmlCssCertificateImg,
  javaScriptCertificatePDF,
  javaScriptCertificateImg,
  reactCertificatePDF,
  reactCertificateImg,
  cssCertificateImg,
  cssCertificatePDF,
} from './assets/pdf/certificate';

import { resume, graduationCertificate } from './assets/pdf';

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
    htmlID: 'contacts',
    text: 'contacts',
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
  { skillName: 'Typescript', skillIcon: typescriptImg, id: nanoid() },
  {
    skillName: 'Node.js',
    skillIcon: nodeImg,
    id: nanoid(),
  },
  {
    skillName: 'React.js',
    skillIcon: reactImg,
    id: nanoid(),
  },
  {
    skillName: 'React Native',
    skillIcon: reactImg,
    id: nanoid(),
  },
  {
    skillName: 'Express.js',
    skillIcon: expressImg,
    id: nanoid(),
  },
  {
    skillName: 'Next.js',
    skillIcon: nextImg,
    id: nanoid(),
  },
  {
    skillName: 'MongoDB',
    skillIcon: mongoDBImg,
    id: nanoid(),
  },
  {
    skillName: 'Prisma',
    skillIcon: prismaImg,
    id: nanoid(),
  },
  {
    skillName: 'Tailwind CSS',
    skillIcon: tailwindImg,
    id: nanoid(),
  },
  {
    skillName: 'Redux',
    skillIcon: reduxImg,
    id: nanoid(),
  },
  {
    skillName: 'Redux-Saga',
    skillIcon: reduxSagaImg,
    id: nanoid(),
  },
  {
    skillName: 'React Query',
    skillIcon: reactQueryIcon,
    id: nanoid(),
  },
  {
    skillName: 'Zod',
    skillIcon: zodImg,
    id: nanoid(),
  },
  {
    skillName: 'React-Hook-Form',
    skillIcon: reactHookFormImg,
    id: nanoid(),
  },
];

export const learningSkills = [
  {
    skillName: 'postgreSQL',
    skillIcon: postgresqlImg,
    id: nanoid(),
  },
  { skillName: 'Docker', skillIcon: dockerImg, id: nanoid() },
  {
    skillName: 'Nest.JS',
    skillIcon: nestImg,
    id: nanoid(),
  },
  // {
  //   skillName: 'GO',
  //   skillIcon: goImg,
  //   id: nanoid(),
  // },
  // {
  //   skillName: 'SQL',
  //   skillIcon: sqlImg,
  //   id: nanoid(),
  // },
  // {
  //   skillName: 'GraphQL',
  //   skillIcon: graphQlImg,
  //   id: nanoid(),
  // },
];

export const projects = [
  {
    id: nanoid(),
    title: 'techHub',
    url: 'https://cliam-tracking.onrender.com',
    sourceCode: 'https://github.com/Nasaee/cliam-tracking',
    info: 'Claim Tracking Medical Instrument application',
    img: claimTracking,
    technology: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Styled-components',
    ],
  },
  {
    id: nanoid(),
    title: 'techHub',
    url: 'https://tecth-hub.netlify.app/',
    sourceCode: 'https://github.com/Nasaee/techhub-store',
    info: 'tecthHub Store ecommerce website',
    img: techHubImg,
    technology: [
      'TypeScript',
      'JavaScript',
      'React.js',
      'Node.js',
      'Tailwind CSS',
    ],
  },
  {
    id: nanoid(),
    title: 'Fitness Hub',
    url: 'https://fitness-hub-application.netlify.app/',
    sourceCode: 'https://github.com/Nasaee/FitnessHub',
    info: 'Fitness Hub online and offline fitness application',
    img: fitnessHubImg,
    technology: ['TypeScript', 'React.js', 'Styled-components'],
  },
  {
    id: nanoid(),
    title: 'portfolio',
    url: 'https://nasaee-portfolio.netlify.app/',
    sourceCode: 'https://github.com/Nasaee/techhub-store',
    info: 'My personal portfolio',
    img: portfolioImg,
    technology: ['JavaScript', 'React.js', 'styled-components', 'CSS'],
  },
];

const bornDate = new Date(1992, 11, 23);
const today = new Date();

export const personalInfo = {
  th: {
    name: ['ชื่อ', 'นาซาอี'],
    lastName: ['นามสกุล', 'หมัดอะดัม'],
    address: {
      road: ['ถนน', 'พัฒนาการ'],
      subDistrict: ['แขวง', 'ประเวศ'],
      district: ['เขต', 'ประเวศ'],
      province: ['จังหวัด', 'กรุงเทพมหานคร'],
    },
    age: ['อายุ', differenceInYears(today, bornDate)],
    graduateFrom: ['จบจาก', 'Kolej Universiti Insaniah (Malaysia)'],
    programe: ['คณะ', 'อักษรศาสตร์ ภาษาอาหรับ'],
  },
  en: {
    name: ['name', 'Nasaee'],
    lastName: ['last name', 'Madadam'],
    address: {
      road: ['road', 'Phatthanakan '],
      subDistrict: ['subDistrict', 'Prawet'],
      district: ['district', 'Prawet'],
      province: ['province', 'Bangkok'],
    },
    age: ['age', differenceInYears(today, bornDate)],
    graduateFrom: ['graduate from', 'Kolej Universiti Insaniah (Malaysia)'],
    programe: ['programe', 'bachelor of arabic language (hons)'],
  },
  resume: ['resume', resume],
  graduationCertificate: ['transcripts', graduationCertificate],
  certificates: [
    {
      id: nanoid(),
      certificateName: 'HTML & CSS',
      certificatePDF: htmlCssCertificatePDF,
      certificateImg: htmlCssCertificateImg,
      certificateDescription:
        'Build responsive real-world websites with HTML & CSS',
    },
    {
      id: nanoid(),
      certificateName: 'JavaScript',
      certificatePDF: javaScriptCertificatePDF,
      certificateImg: javaScriptCertificateImg,
      certificateDescription:
        'The complete JavaScript Course From Zero to Expert',
    },
    {
      id: nanoid(),
      certificateName: 'React 18 Tutorial and Projects',
      certificatePDF: reactCertificatePDF,
      certificateImg: reactCertificateImg,
      certificateDescription:
        'The complete JavaScript Course From Zero to Expert',
    },
    {
      id: nanoid(),
      certificateName: 'CSS Bootcamp - Master CSS (CSS Grid / CSS Flexbox)',
      certificatePDF: cssCertificatePDF,
      certificateImg: cssCertificateImg,
      certificateDescription:
        'The complete JavaScript Course From Zero to Expert',
    },
  ],
};

export const socials = [
  {
    name: 'Github',
    url: 'https://github.com/Nasaee',
    icon: <FaGithub />,
    id: nanoid(),
  },
  {
    name: 'Email',
    url: 'nasaee.dev@gmail.com',
    icon: <SiGmail />,
    id: nanoid(),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/nasaee.madadam',
    icon: <FaFacebook />,
    id: nanoid(),
  },
  {
    name: 'LinkIN',
    url: 'https://www.linkedin.com/in/nasa-ee-madadam-b3a0b7272/',
    icon: <FaLinkedin />,
    id: nanoid(),
  },
];

export const contactMe = {
  email: {
    address: 'nasaee.dev@gmail.com',
    icon: <SiGmail />,
    id: nanoid(),
  },
  phone: {
    phoneNo: '0831841131',
    icon: <ImPhone />,
    id: nanoid(),
  },
  facebook: {
    userName: 'Nasa-ee Madadam',
    url: 'https://www.facebook.com/nasaee.madadam',
    icon: <FaFacebook />,
    id: nanoid(),
  },

  linkIn: {
    userName: 'Nasa-ee Madadam',
    url: 'https://www.linkedin.com/in/nasa-ee-madadam-b3a0b7272/',
    icon: <BsLinkedin />,
    id: nanoid(),
  },
};
