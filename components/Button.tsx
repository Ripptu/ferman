import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '' 
}) => {
  const baseStyle = "px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider";
  
  const variants = {
    primary: "bg-accent text-primary hover:bg-accentHover shadow-lg shadow-accent/20",
    secondary: "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
