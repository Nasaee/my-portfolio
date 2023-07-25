import { nanoid } from 'nanoid';

export const sectionNavigation = [
  { htmlID: 'home', text: 'home', id: nanoid() },
  { htmlID: 'skills', text: 'skills', id: nanoid() },
  { htmlID: 'projects', text: 'projects', id: nanoid() },
  { htmlID: 'about-me', text: 'about me', id: nanoid() },
  { htmlID: 'contact', text: 'contact', id: nanoid() },
];

export const kills = [
  { skillName: '', skillIcon: '', skillDescription: '' },
  { skillName: '', skillIcon: '', skillDescription: '' },
  { skillName: '', skillIcon: '', skillDescription: '' },
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
  { name: 'Github', url: 'https://github.com/Nasaee', icon: '' },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/nasaee.madadam',
    icon: '',
  },
  {
    name: 'LinkIN',
    url: 'https://www.linkedin.com/in/nasa-ee-madadam-b3a0b7272/',
    icon: '',
  },
  { name: 'Twitter', url: 'https://twitter.com/nasa_ee', Icon: '' },
  { name: 'Email', url: 'nasaee.dev@gmail.com', icon: '' },
];

export const contectMe = {
  phone: '0831841131',
  email: 'nasaee.dev@gmail.com',
  facebook: 'https://www.facebook.com/nasaee.madadam',
  linkIn: 'https://www.linkedin.com/in/nasa-ee-madadam-b3a0b7272/',
};
