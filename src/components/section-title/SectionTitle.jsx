import Style from './section-title.style';

const SectionTitle = ({ title, subTitle }) => {
  return (
    <Style data-aos='fade-down' data-aos-delay='50'>
      <h2 className='title'>{title}</h2>
      <p className='subtitle'>{subTitle}</p>
    </Style>
  );
};
export default SectionTitle;
