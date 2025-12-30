import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-white hover:brightness-110 shadow-[0_4px_14px_rgba(255,107,91,0.4)] hover:shadow-[0_12px_32px_rgba(255,107,91,0.2)] hover:-translate-y-1 active:translate-y-[-2px] active:shadow-[0_8px_20px_rgba(255,107,91,0.15)] transition-all duration-300 ease-out',
            secondary: 'bg-secondary text-white hover:brightness-110 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-[-2px] transition-all duration-300 ease-out',
            accent: 'bg-accent text-gray-900 hover:bg-yellow-400 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-[-2px] transition-all duration-300 ease-out',
            outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary/5 hover:-translate-y-1 active:translate-y-[-2px] transition-all duration-300 ease-out',
            ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 transition-colors duration-200',
        };

        const sizes = {
            sm: 'px-4 py-1.5 text-sm',
            md: 'px-6 py-2.5 text-base',
            lg: 'px-8 py-3.5 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-3xl font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    fullWidth && 'w-full',
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, cn };
