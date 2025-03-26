import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        // Try to get the language from localStorage, default to 'RO' if not found
        const savedLanguage = localStorage.getItem('selectedLanguage');
        return savedLanguage || 'RO';
    });

    // Update localStorage whenever the language changes
    useEffect(() => {
        localStorage.setItem('selectedLanguage', currentLanguage);
    }, [currentLanguage]);

    const toggleLanguage = () => {
        setCurrentLanguage(prev => prev === 'RO' ? 'RU' : 'RO');
    };

    const t = translations[currentLanguage];

    return (
        <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}; 