import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button'; // Reusing cn utility

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'bg-white rounded-3xl p-6 border border-slate-50 transition-all duration-500 ease-out',
                    // Disney Magic Shadow: Colored tint (Coral/Primary) 15% opacity
                    'shadow-[0_12px_32px_rgba(255,107,91,0.15)]',
                    hoverEffect && 'hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,107,91,0.2)]',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';

export { Card };
