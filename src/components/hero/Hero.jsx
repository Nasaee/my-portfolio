import Style from './hero.style';
import profileImg from '../../assets/img/profile-pic.png';

const Hero = () => {
  return (
    <Style>
      <section id='home' className='hero'>
        <div className='hero-content'></div>
        <div className='hero-img'>
          <img src={profileImg} alt='profile image' className='profileImg' />
        </div>
      </section>
    </Style>
  );
};
export default Hero;
