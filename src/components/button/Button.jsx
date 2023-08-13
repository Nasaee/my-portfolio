import { memo } from 'react';
import { BaseButton } from './Button.style';

const Button = ({ children }) => {
  return (
    <BaseButton>
      <a href='#contacts'>
        <span>{children}</span>
      </a>
    </BaseButton>
  );
};
export default memo(Button);
