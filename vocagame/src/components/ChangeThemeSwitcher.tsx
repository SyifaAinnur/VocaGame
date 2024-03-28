'use client';

import { useEffect, useState } from 'react';

const ChangeThemeSwitcher = ({ className }: { className: string }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme);
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <label className={`z-[2] inline-flex items-center cursor-pointer ${className}`}>
			<span className='me-3 text-sm font-medium'>Light</span>

			<input type='checkbox' value='' className='sr-only peer' onChange={toggleTheme} checked={theme === 'dark'} />
			<div className={`relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${theme === 'dark' ? 'peer-checked:bg-primary-200' : ''}`}></div>

			<span className='ms-3 text-sm font-medium'>Dark</span>
		</label>
    );
};

export default ChangeThemeSwitcher;
