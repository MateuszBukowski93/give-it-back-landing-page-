import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface FeatureItem {
  icon: ReactNode;
  title: string;
}

export interface BenefitItem {
  text: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}
