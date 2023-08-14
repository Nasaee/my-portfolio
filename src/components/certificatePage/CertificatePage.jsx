import Style from './certificatePage.style';
import { personalInfo } from '../../data';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useGlobalContext } from '../../context';

const CertificatePage = () => {
  const { certificates } = personalInfo;
  const { closeCertificatePage, isCertificatePageOpen } = useGlobalContext();

  return (
    <Style className={isCertificatePageOpen ? 'active' : ''}>
      <button className='close-btn' onClick={() => closeCertificatePage()}>
        <BsFillArrowLeftCircleFill />
      </button>
      <div className='title-container'>
        <h3 className='title'>My Certificates</h3>
      </div>
      <div className='center'>
        {certificates.map((certificate) => {
          const { id, certificateName, certificatePDF, certificateImg } =
            certificate;
          return (
            <a
              key={id}
              href={certificatePDF}
              target='_blank'
              rel='noreferrer'
              className='certificate'
            >
              <img src={certificateImg} alt={certificateName} className='img' />
              <h5>{certificateName}</h5>
            </a>
          );
        })}
      </div>
    </Style>
  );
};
export default CertificatePage;
