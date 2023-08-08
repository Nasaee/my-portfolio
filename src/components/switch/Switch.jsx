import { useState } from 'react';
import Style from './switch.style';

// 11. Elastic Toggle Switch CSS
const Switch = () => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (e) => {
    const language = e.target.checked ? 'en' : 'th';
    setLanguage(language);
  };

  return (
    <Style>
      <label className='switch'>
        <input type='checkbox' onClick={switchLanguage} />
        <span className='slider'>
          <div className='slider-text'>
            <span>TH</span>
          </div>
        </span>
      </label>
    </Style>
  );
};
export default Switch;
