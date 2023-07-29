import Section from './skills.style';
import SectionTitle from '../section-title/SectionTitle';

const Skills = () => {
  return (
    <Section>
      <SectionTitle title='skills' subTitle='my skills' />

      <div className='content'>
        <div className='img-container'></div>
        <ul className='skills-lists'></ul>
      </div>
    </Section>
  );
};
export default Skills;
