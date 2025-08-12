import React from "react";

type LoadingProps = {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    showText?: boolean;
    className?: string;
}

const Loading: React.FC<LoadingProps> = ({
    size = 'md',
    text = 'Loading...',
    showText = true,
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    const textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
    };

    return (
        <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
            {/* Spinner */}
            <div className="relative">
                <div
                    className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}
                />
            </div>

            {/* Loading text */}
            {showText && (
                <p className={`mt-4 text-gray-600 font-medium ${textSizeClasses[size]}`}>
                    {text}
                </p>
            )}
        </div>
    );
};

export default Loading;