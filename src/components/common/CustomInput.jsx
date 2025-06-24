import React, { forwardRef } from 'react';

const CustomInput = forwardRef(
    (
        {
            type = 'text',
            placeholder,
            className = '',
            label,
            error,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <div className={`relative w-full ${className}`}>
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${error
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-gray-300 focus:ring-blue-400'
                        }`}
                    {...rest}
                />
                {children && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                        {children}
                    </div>
                )}
                {error && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
            </div>
        );
    }
);

export default CustomInput;
