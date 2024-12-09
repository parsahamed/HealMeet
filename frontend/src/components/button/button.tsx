import React from 'react';
import './button.css';

type ButtonProps = {
  children: React.ReactNode[] | React.ReactNode;
  onClick?: () => void;
  kind?: 'primary' | 'secondary' | 'danger';
  type?: 'submit' | 'reset' | 'button' | undefined;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, kind = 'primary', type }) => {
  return (
    <button className={`btn btn-${kind}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;