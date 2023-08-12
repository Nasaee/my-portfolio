import Style from './switch.style';
import { useGlobalContext } from '../../context';

const Switch = () => {
  const { language, setLanguage } = useGlobalContext();

  const switchLanguage = (e) => {
    const language = e.target.checked ? 'th' : 'en';
    setLanguage(language);
  };

  return (
    <Style>
      <label className='switch'>
        <input type='checkbox' onClick={switchLanguage} />
        <span className='slider'>
          <div className='slider-text'>
            <span>{language === 'en' ? 'th' : 'en'}</span>
          </div>
        </span>
      </label>
    </Style>
  );
};
export default Switch;
