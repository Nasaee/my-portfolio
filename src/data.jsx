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

import {
  htmlCssCertificatePDF,
  htmlCssCertificateImg,
  javaScriptCertificatePDF,
  javaScriptCertificateImg,
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
    name: ['ชื่อ', 'นาซาอี'],
    lastName: ['นามสกุล', 'หมัดอะดัม'],
    address: {
      road: ['ถนน', 'พัฒนาการ'],
      subDistrict: ['แขวง', 'ประเวศ'],
      district: ['เขต', 'ประเวศ'],
      province: ['จังหวัด', 'กรุงเทพมหานคร'],
    },
    age: ['อายุ', new Date().getFullYear() - 1992, 'ปี'],
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
    age: ['age', new Date().getFullYear() - 1992],
    graduateFrom: ['graduate from', 'Kolej Universiti Insaniah (Malaysia)'],
    programe: ['programe', 'bachelor of arabic language (hons)'],
  },
  resume: ['resume', resume],
  graduationCertificate: ['graduation certificate', graduationCertificate],
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
