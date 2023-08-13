import { memo } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import Style from './otherCertificate.style';
import { useGlobalContext } from '../../context';

const OtherCertificate = () => {
  const { openCertificatePage } = useGlobalContext();
  return (
    <Style>
      <button type='button' onClick={() => openCertificatePage()}>
        <p>other skills certificate</p>
        <BsArrowRightSquare />
      </button>
    </Style>
  );
};
export default memo(OtherCertificate);
