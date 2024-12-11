import React, { useState } from 'react';
import { MoonIcon, SunIcon } from '../../icons';
import './themeToggle.css'

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div onClick={toggleTheme} className={`toggele toggele-${theme}`}>
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </div>
    );
};

export default ThemeToggle;