import Style from './hero.style';
import profileImg from '../../assets/img/profile-pic.png';

const Hero = () => {
  return (
    <Style>
      <section id='home' className='hero'>
        <div className='hero-content'></div>
        <div className='hero-img'>
          <img src={profileImg} alt='' />
        </div>
      </section>
    </Style>
  );
};
export default Hero;
