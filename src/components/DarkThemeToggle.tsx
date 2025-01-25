import { useState, useEffect } from 'react';

const DarkThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check the saved theme preference in local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.body.classList.toggle('dark', savedTheme === 'dark');
        }
    }, []);

    const handleToggle = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme); // Save the user's preference
    };

    return (
        <div className="flex items-center p-4">
            <button onClick={handleToggle} className="p-2 bg-gray-200 dark:bg-gray-700 rounded transition-colors duration-300">
                {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1M12 20v1M4.22 4.22l.707.707M19.07 19.07l.707.707M1 12h1m20 0h1M4.22 19.78l.707-.707M19.07 4.93l.707-.707" />
                        <path d="M12 4.5a7.5 7.5 0 100 15a7.5 7.5 0 000-15z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1M12 20v1M4.22 4.22l.707.707M19.07 19.07l.707.707M1 12h1m20 0h1M4.22 19.78l.707-.707M19.07 4.93l.707-.707" />
                        <path d="M12 2a10 10 0 100 20a10 10 0 000-20z" />
                    </svg>
                )}
            </button>
            <span className="ml-2 text-gray-700 dark:text-white">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
        </div>
    );
};

export default DarkThemeToggle;
