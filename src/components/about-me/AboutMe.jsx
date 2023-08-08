import SectionTitle from '../section-title/SectionTitle';
import Section from './aboutMe.style';
import Switch from '../switch/Switch';
// import { personalInfo } from '../../data';

const AboutMe = () => {
  return (
    <Section id='about-me'>
      <SectionTitle title='about me' subTitle='know more about me' />
      <Switch />
    </Section>
  );
};
export default AboutMe;
