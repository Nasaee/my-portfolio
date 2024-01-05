import SectionTitle from '../section-title/SectionTitle';
import { skillsImg } from '../../assets/img/skills';
import { skills, learningSkills } from '../../data';
import Tilt from 'react-parallax-tilt';
import { styled } from 'styled-components';

const Skills = () => {
  return (
    <Section id='skills'>
      <SectionTitle title='skills' subTitle='my skills' />

      <div className='content'>
        <div className='img-container' data-aos='fade-right'>
          <img src={skillsImg} />
        </div>
        <div className='skill'>
          <div>
            <h4>using now:</h4>
            <ul
              className='skill-list'
              data-aos='fade-left'
              data-aos-delay='500'
            >
              {skills.map((skill) => {
                const { skillIcon, id, skillName } = skill;
                return (
                  <Tilt key={id}>
                    <li>
                      <img src={skillIcon} alt='code skill icon' />
                      <p>{skillName}</p>
                    </li>
                  </Tilt>
                );
              })}
            </ul>
          </div>
          <div>
            <h4>learning:</h4>
            <ul
              className='skill-list'
              data-aos='fade-left'
              data-aos-delay='500'
            >
              {learningSkills.map((skill) => {
                const { skillIcon, id, skillName } = skill;
                return (
                  <Tilt key={id}>
                    <li>
                      <img src={skillIcon} alt='code skill icon' />
                      <p>{skillName}</p>
                    </li>
                  </Tilt>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Skills;

const Section = styled.section`
  background: var(--color-blog);
  padding: var(--section-padding);
  min-height: 100vh;

  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    max-width: 1600px;
    margin: 0 auto;

    h4 {
      font-size: 1.2rem;
      text-transform: uppercase;
      margin-bottom: 4rem;
      color: var(--title-color);
      letter-spacing: 5px;
    }

    .skill div {
      margin-bottom: 4rem;
    }

    .skill-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
      place-items: center;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        transition: var(--transition);
      }

      p {
        display: inline-block;
        color: var(--title-color);
        font-family: Paprika;
        font-size: 0.8rem;
        text-align: center;
        letter-spacing: var(--letter-spacing);
        position: relative;
      }

      p::after {
        position: absolute;
        content: '';
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 1px;
        background: var(--gradient-text);
        transition: var(--transition);
      }

      img {
        width: 5.5rem;
        height: 5.5rem;
      }

      li:hover {
        transform: scale(1.2);
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);

        & p::after {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 1025px) {
    .content {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .img-container {
      display: none;
    }
  }

  @media (max-width: 637px) {
    .skill-list {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }

  @media (max-width: 484px) {
    .skill-list {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
`;
