import React from 'react';
import { Category } from '../../types';
import * as LucideIcons from 'lucide-react';

interface CategoryBadgeProps {
  category: Category;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const CategoryBadge = ({ 
  category, 
  size = 'md', 
  showLabel = true,
  className = ''
}: CategoryBadgeProps) => {
  const sizeClasses = {
    sm: 'text-xs p-1.5',
    md: 'text-sm p-2',
    lg: 'text-base p-2.5'
  };
  
  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22
  };
  
  // Dynamically get the icon from lucide-react
  const IconComponent = (LucideIcons as any)[
    category.iconName.charAt(0).toUpperCase() + category.iconName.slice(1)
  ];
  
  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
    const formattedHex = hex.replace(shorthandRegex, (_, r, g, b, a = '') => r + r + g + g + b + b + (a ? a + a : ''));
    
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(formattedHex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: result[4] ? parseInt(result[4], 16) / 255 : 1
    } : { r: 0, g: 0, b: 0, a: 1 };
  };
  
  const rgb = hexToRgb(category.color);
  
  return (
    <div 
      className={`inline-flex items-center rounded-full ${sizeClasses[size]} ${className} ${showLabel ? 'pr-3' : ''}`}
      style={{
        backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`,
      }}
    >
      <div 
        className="flex items-center justify-center rounded-full"
        style={{ 
          backgroundColor: category.color,
          width: iconSizes[size] * 1.5, 
          height: iconSizes[size] * 1.5,
        }}
      >
        {IconComponent && (
          <IconComponent 
            size={iconSizes[size]} 
            className="text-white" 
          />
        )}
      </div>
      
      {showLabel && (
        <span 
          className="ml-2 font-medium"
          style={{ color: category.color }}
        >
          {category.name}
        </span>
      )}
    </div>
  );
};

export default CategoryBadge;