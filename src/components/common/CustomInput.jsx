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
                    className={`w-full px-7 py-3.5 rounded-[100px] focus:outline-none bg-[#F4F8F7] ${error
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-gray-300 focus:ring-blue-400'
                        }`}
                    {...rest}
                />
                {children && (
                    <div className="absolute right-3 top-3.5 cursor-pointer">
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
