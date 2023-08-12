import { memo } from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import Style from './otherCertificate.style';

const OtherCertificate = () => {
  return (
    <Style>
      <a href='#' target='_blank' rel='noreferrer'>
        <p>other skills certificate</p>
        <BsArrowRightSquare />
      </a>
    </Style>
  );
};
export default memo(OtherCertificate);
