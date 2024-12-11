import React from 'react';

export const SunIcon: React.FC<{ width?: number, height?: number }> = ({ width = 32, height = 32 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 64 64"
    >
        <circle cx="32" cy="32" r="12" />
        <line x1="32" y1="4" x2="32" y2="16" strokeWidth="4" />
        <line x1="32" y1="48" x2="32" y2="60" strokeWidth="4" />
        <line x1="4" y1="32" x2="16" y2="32" strokeWidth="4" />
        <line x1="48" y1="32" x2="60" y2="32" strokeWidth="4" />
        <line x1="10.39" y1="10.39" x2="18.39" y2="18.39" strokeWidth="4" />
        <line x1="45.61" y1="45.61" x2="53.61" y2="53.61" strokeWidth="4" />
        <line x1="45.61" y1="18.39" x2="53.61" y2="10.39" strokeWidth="4" />
        <line x1="10.39" y1="53.61" x2="18.39" y2="45.61" strokeWidth="4" />
    </svg>
);

export default SunIcon;
