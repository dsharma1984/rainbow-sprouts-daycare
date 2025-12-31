import { ReactNode } from 'react';
import { cn } from './Button';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'soft' | 'primary' | 'accent';
    withWaveTop?: boolean;
    withWaveBottom?: boolean;
}

const WavyDividerRaw = ({ className, flip = false }: { className?: string; flip?: boolean }) => (
    <div className={cn('absolute left-0 w-full overflow-hidden leading-[0]', className, flip ? 'bottom-0 rotate-180' : 'top-0')}>
        <svg
            className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-current"
            ></path>
        </svg>
    </div>
);

export function SectionWrapper({
    children,
    className,
    id,
    background = 'white',
    withWaveTop,
    withWaveBottom,
}: SectionWrapperProps) {
    const bgColors = {
        white: 'bg-white text-gray-800',
        soft: 'bg-background text-gray-800',
        primary: 'bg-primary text-white',
        accent: 'bg-accent text-gray-900',
    };

    const waveColor = {
        white: 'text-white',
        soft: 'text-[var(--color-background)]', // Using CSS variable for consistency
        primary: 'text-primary',
        accent: 'text-accent',
    };

    // Determine the color of the wave based on THIS section's background
    // Ideally, the top wave should act as a transition from the PREVIOUS section.
    // But for simplicity, we usually set the wave color to match THIS section's bg so it looks like it's "dripping" down or rising up 
    // OR we set it to match the ADJACENT section to "cut into" this one.
    // Let's implement standardized "Self-colored" waves that extend outwards.
    // Actually, usually you want the wave to be the color of the section.

    return (
        <section id={id} className={cn('relative py-8 md:py-24', bgColors[background], className)}>
            {withWaveTop && <WavyDividerRaw className="-mt-[49px] md:-mt-[79px]" flip={false} />}

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {children}
            </div>

            {withWaveBottom && <WavyDividerRaw className="-mb-[49px] md:-mb-[79px]" flip={true} />}
        </section>
    );
}
