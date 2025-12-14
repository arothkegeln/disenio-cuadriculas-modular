import type { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

interface BentoCardProps {
    title: string;
    description: string;
    header?: ReactNode;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
    colSpan?: 1 | 2 | 3;
}

export const BentoCard = ({
    className,
    title,
    description,
    header,
    icon,
    onClick,
    colSpan = 1,
}: BentoCardProps) => {
    const colSpanClass = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
    }[colSpan];

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={cn(
                "row-span-1 group/bento rounded-xl p-0 bg-surface/40 hover:bg-surface/60 border border-white/5 hover:border-white/10 transition duration-300 flex flex-col justify-between cursor-pointer overflow-hidden relative backdrop-blur-2xl",
                colSpanClass,
                className
            )}
            onClick={onClick}
        >
            {/* Tech Decoration Corner */}
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,229,255,0.7)]" />
            </div>

            {header && <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-surface/90" />
                {header}
            </div>}

            <div className="p-6 relative z-20 group-hover/bento:translate-y-[-2px] transition-transform duration-300">
                {icon && <div className="mb-4 text-neutral-400 group-hover/bento:text-primary transition-colors duration-300">{icon}</div>}
                <div className="font-sans font-medium text-white text-xl mb-2 tracking-tight">
                    {title}
                </div>
                <div className="font-sans font-light text-neutral-400 text-sm leading-relaxed">
                    {description}
                </div>
            </div>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};
