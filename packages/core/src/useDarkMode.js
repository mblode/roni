import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode('dark');
        } else {
            setMode('light');
        }

        setComponentMounted(true);
    }, []);

    return [theme, componentMounted];
};
