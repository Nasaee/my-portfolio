import Section from './skills.style';
import SectionTitle from '../section-title/SectionTitle';
import { skillsImg } from '../../assets/img/skills';
import { skills } from '../../data';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <Section id='skills'>
      <SectionTitle title='skills' subTitle='my skills' />

      <div className='content'>
        <div className='img-container'>
          <img src={skillsImg} />
        </div>
        <ul className='skills-list'>
          {skills.map((skill) => {
            const { skillIcon, id, skillName } = skill;
            return (
              <Tilt key={id}>
                <li>
                  <div className='skill-img-container'>
                    <img src={skillIcon} alt='code skill icon' />
                    <p>{skillName}</p>
                  </div>
                </li>
              </Tilt>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};
export default Skills;
