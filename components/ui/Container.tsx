import React from 'react';
import { BaseProps } from '../../types';

export const Container: React.FC<BaseProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-md mx-auto px-4 sm:px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl ${className}`}>
      {children}
    </div>
  );
};
