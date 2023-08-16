import SectionTitle from '../section-title/SectionTitle';
import Section from './contactMe.style';
import contactImg from '../../assets/img/contacts/contacts.svg';
import { contactMe } from '../../data';

const ContactsMe = () => {
  const { email, phone, facebook, linkIn } = contactMe;

  return (
    <Section id='contacts'>
      <SectionTitle title='contact me' subTitle='get in touch' />
      <div className='grid-container'>
        <div className='img-container' data-aos='fade-right'>
          <img src={contactImg} alt='contact wiht other' />
        </div>
        <div className='contacts' data-aos='fade-left'>
          <a href={`mailto:${email.address}`} className='email'>
            {email.icon}
            <span>{email.address}</span>
          </a>
          <a href={`tel:${phone.phoneNo}`} className='phone'>
            {phone.icon}
            <span>{phone.phoneNo}</span>
          </a>
          <a
            href={facebook.url}
            className='facebook'
            target='_blank'
            rel='noreferrer'
          >
            {facebook.icon}
            <span>{facebook.userName}</span>
          </a>
          <a
            href={linkIn.url}
            className='linkIn'
            target='_blank'
            rel='noreferrer'
          >
            {linkIn.icon}
            <span>{linkIn.userName}</span>
          </a>
        </div>
      </div>
    </Section>
  );
};
export default ContactsMe;
