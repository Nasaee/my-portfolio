import Section from './callToAction.style';
import SectionTitle from '../section-title/SectionTitle';

const CallToAction = () => {
  return (
    <Section>
      <SectionTitle title='hire me' subTitle='for your projects' />
      <div className='center' data-aos='zoom-in'>
        <div className='call-to-action-container'>
          <p className='call-to-action-text'>I will do my best</p>
          <div className='center'>
            <button className='cta-btn'>
              <a href='#contacts'>
                <span>HIRE ME</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default CallToAction;
