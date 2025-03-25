import React, { useState } from 'react';
import { HeartIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface FavoriteButtonProps {
  initialState?: boolean;
  onToggle?: (isFavorite: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
}
const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  initialState = false,
  onToggle,
  size = 'md'
}) => {
  const [isFavorite, setIsFavorite] = useState(initialState);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
    onToggle?.(!isFavorite);
  };
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };
  return <button onClick={handleClick} className="relative focus:outline-none" aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
      <AnimatePresence mode="wait">
        <motion.div key={isFavorite ? 'filled' : 'outline'} initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.8,
        opacity: 0
      }} transition={{
        duration: 0.15
      }}>
          <HeartIcon className={`${sizes[size]} ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'} transition-colors duration-200`} />
        </motion.div>
      </AnimatePresence>
    </button>;
};
export default FavoriteButton;