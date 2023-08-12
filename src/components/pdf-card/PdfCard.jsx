import { memo } from 'react';
import Style from './pafCard.style';
import { BsFiletypePdf } from 'react-icons/bs';

const PdfCard = ({ pdfFile }) => {
  return (
    <Style>
      <a href={pdfFile[1]} target='_blank' rel='noreferrer'>
        <p>{pdfFile[0]}</p>
        <BsFiletypePdf />
      </a>
    </Style>
  );
};
export default memo(PdfCard);
