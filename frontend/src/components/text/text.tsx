import React from 'react';
import './text.css';

type TextProps = {
    children: string,
    size?: 'small' | 'base' | 'large' | 'title',
    align?: 'start' | 'end' | 'center',
};

export const Text: React.FC<TextProps> = ({ children, size = 'base', align = 'start' }) => {
    return <div className={`text text-${size} text-align-${align}`}>{children}</div>;
};

export default Text;