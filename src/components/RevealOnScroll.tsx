import { motion } from 'framer-motion';

interface RevealOnScrollProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
    children, 
    delay = 0, 
    className = "",
    direction = "up"
}) => {
    // Generate initial translation based on direction
    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 40, x: 0 };
            case "down": return { y: -40, x: 0 };
            case "left": return { x: 40, y: 0 };
            case "right": return { x: -40, y: 0 };
            case "none": return { x: 0, y: 0 };
            default: return { y: 40, x: 0 };
        }
    };

    const offset = getDirectionOffset();

    return (
        <motion.div 
            className={className}
            initial={{ 
                opacity: 0, 
                x: offset.x,
                y: offset.y,
                scale: 0.95
            }}
            whileInView={{ 
                opacity: 1, 
                x: 0,
                y: 0,
                scale: 1
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: delay / 1000, // framer-motion delay is in seconds, existing code uses ms
                type: "spring",
                bounce: 0.3,
                damping: 20
            }}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;

