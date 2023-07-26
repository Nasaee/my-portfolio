import { memo } from 'react';
import { BaseButton } from './Button.style';

const Button = ({ children, linkToGo }) => {
  return (
    <BaseButton>
      <a href={linkToGo} onClick={(e) => e.preventDefault()}>
        <span>{children}</span>
      </a>
    </BaseButton>
  );
};
export default memo(Button);
