import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface RainbowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const RainbowBorderButton = ({ children, className = '', ...props }: RainbowButtonProps) => {
    return (
        <button
            className={`rainbow-border relative flex items-center justify-center gap-2.5 px-4 bg-neutral-900 border-none text-white cursor-pointer font-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2 w-full justify-center">
                {children}
            </span>
        </button>
    );
};
