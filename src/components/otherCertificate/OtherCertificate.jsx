import { memo } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import Style from './otherCertificate.style';
import { useGlobalContext } from '../../context';

const Certificate = () => {
  const { openCertificatePage } = useGlobalContext();
  return (
    <Style>
      <button type='button' onClick={() => openCertificatePage()}>
        <p>certificate</p>
        <BsArrowRightSquare />
      </button>
    </Style>
  );
};
export default memo(Certificate);
