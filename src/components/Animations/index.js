import React from 'react';
import { motion } from 'framer-motion';

// Text reveal animation - character by character
const CharacterReveal = ({ text, className, delay = 0 }) => {
    const characters = text.split('');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay,
            },
        },
    };

    const charVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.span
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'inline-block', perspective: '500px' }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={charVariants}
                    style={{
                        display: 'inline-block',
                        transformOrigin: 'bottom center',
                        whiteSpace: char === ' ' ? 'pre' : 'normal',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Word reveal animation
const WordReveal = ({ text, className, delay = 0 }) => {
    const words = text.split(' ');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: 'blur(10px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    return (
        <motion.span
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'inline-block' }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                    style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Slide up animation wrapper
const SlideUp = ({ children, delay = 0, className }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

// Scale in animation
const ScaleIn = ({ children, delay = 0, className }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                delay,
                type: 'spring',
                stiffness: 100,
                damping: 15,
            }}
        >
            {children}
        </motion.div>
    );
};

// Floating animation
const FloatingElement = ({ children, className, intensity = 10 }) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [-intensity, intensity, -intensity],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {children}
        </motion.div>
    );
};

// Magnetic hover effect
const MagneticButton = ({ children, className, strength = 0.3 }) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        >
            {children}
        </motion.div>
    );
};

// Stagger container
const StaggerContainer = ({ children, className, delay = 0, staggerDelay = 0.1 }) => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

// Stagger item
const StaggerItem = ({ children, className }) => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

// Page transition wrapper
const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
            {children}
        </motion.div>
    );
};

export {
    CharacterReveal,
    WordReveal,
    SlideUp,
    ScaleIn,
    FloatingElement,
    MagneticButton,
    StaggerContainer,
    StaggerItem,
    PageTransition,
};
