// components/LoadingSpinner.tsx

import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-50">
            <div className="w-16 h-16 border-4 border-buttonColor border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
