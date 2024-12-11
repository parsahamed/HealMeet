import React from 'react';
import { useTranslation } from 'react-i18next';
import './text.css';

type TextProps = {
  children: React.ReactNode;
  size?: 'small' | 'base' | 'large' | 'title';
  align?: 'start' | 'end' | 'center';
  translate?: boolean;
};

export const Text: React.FC<TextProps> = ({ children, size = 'base', align = 'start', translate = true }) => {
  const { t } = useTranslation();
  const content = translate && typeof children === 'string' ? t(children) : children;

  return <div className={`text text-${size} text-align-${align}`}>{content}</div>;
};

export default Text;