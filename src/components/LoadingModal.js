import React from 'react';
import './LoadingModal.css';
import { useLanguage } from '../context/LanguageContext';

const LoadingModal = ({ isOpen }) => {
    const { t } = useLanguage();
    
    if (!isOpen) return null;

    return (
        <div className="loading-modal-overlay">
            <div className="loading-modal-content">
                <div className="loading-spinner"></div>
                <p>{t.payment.loadingText}</p>
            </div>
        </div>
    );
};

export default LoadingModal; 