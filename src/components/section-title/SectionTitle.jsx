import Style from './section-title.style';

const SectionTitle = ({ title, subTitle }) => {
  return (
    <Style>
      <h2 className='title'>{title}</h2>
      <p className='subtitle'>{subTitle}</p>
    </Style>
  );
};
export default SectionTitle;
