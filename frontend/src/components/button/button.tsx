import React from 'react';
import './button.css';
import { useTranslation } from 'react-i18next';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  kind?: 'primary' | 'secondary' | 'danger';
  type?: 'submit' | 'reset' | 'button' | undefined;
  translate?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, kind = 'primary', type, translate = true }) => {
  const { t } = useTranslation();
  const content = translate && typeof children === 'string' ? t(children) : children;

  return (
    <button className={`btn btn-${kind}`} onClick={onClick} type={type}>
      {content}
    </button>
  );
};

export default Button;