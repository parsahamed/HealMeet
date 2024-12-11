import React from 'react';

export const MoonIcon: React.FC<{ width?: number, height?: number }> = ({ width = 32, height = 32 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 64 64"
    >
        <path
            d="M42 32C42 42.4934 33.4934 51 23 51C18.1426 51 13.6761 49.3465 10 46.4606C16.6061 46.0341 22 40.1762 22 33C22 25.8238 16.6061 19.9659 10 19.5394C13.6761 16.6535 18.1426 15 23 15C33.4934 15 42 23.5066 42 32Z"
        />
    </svg>
);

export default MoonIcon;
