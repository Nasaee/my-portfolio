import SectionTitle from '../section-title/SectionTitle';
import Section from './aboutMe.style';
import Switch from '../switch/Switch';
import { personalInfo } from '../../data';
import { useGlobalContext } from '../../context';
import aboutMeImg from '../../assets/img/about-me/about-me.svg';
import PdfCard from '../pdf-card/PdfCard';

const AboutMe = () => {
  const { language } = useGlobalContext();

  const { name, lastName, address, age, graduateFrom, programe } =
    personalInfo[language];
  const { road, subDistrict, district, province } = address;

  return (
    <Section id='about-me'>
      <SectionTitle title='about me' subTitle='know more about me' />
      <Switch />
      <div className='personal-info-container'>
        <div className='personal-info'>
          <p className='name'>
            <span>{`${name[0]} : `}</span>
            <span>{`${name[1]} ${lastName[1]}`} </span>
          </p>
          <p className='age'>
            <span>{`${age[0]} : `}</span>
            <span>{[age[1]]}</span>&nbsp;
          </p>
          <p className='graduation-frome'>
            <span>{`${graduateFrom[0]}  : `}</span>
            <span>{graduateFrom[1]}</span>
          </p>
          <p className='program'>
            <span>{`${programe[0]} : `}</span>
            <span>{programe[1]}</span>
          </p>
          <p className='road'>
            <span>{`${language === 'en' ? 'address' : 'ที่อยู่'} : `}</span>
            <span>
              {`${road[1]}, ${subDistrict[1]}, ${district[1]}, ${province[1]}`}{' '}
            </span>
          </p>
        </div>
        <div className='img-container'>
          <img src={aboutMeImg} />
        </div>
      </div>
      <PdfCard />
    </Section>
  );
};
export default AboutMe;
