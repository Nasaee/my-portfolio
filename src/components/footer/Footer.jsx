import Style from './footer.style';
import { socials } from '../../data';

const Footer = () => {
  return (
    <Style>
      <ul className='socials'>
        {socials.map((social) => {
          const { icon, id, url, name } = social;
          return (
            <li key={id}>
              <a
                href={name.toLowerCase() === 'email' ? `mailto:${url}` : url}
                target='_blank'
                rel='noreferrer'
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='underline'></div>
      <div className='copyright-container'>
        <span className='copyright'>&#169;{new Date().getFullYear()}</span>
        <span className='deverloper'>
          Portfolio deverloped by Nasaee Madadam
        </span>
      </div>
    </Style>
  );
};
export default Footer;
