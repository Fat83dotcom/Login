import { MantineThemeOverride } from '@mantine/core';

export const lightTheme: MantineThemeOverride = {
  
  primaryColor: 'blue',
  defaultRadius: 'md',
  fontFamily: 'Inter, sans-serif',
};

export const darkTheme: MantineThemeOverride = {
  
  primaryColor: 'cyan',
  defaultRadius: 'md',
  fontFamily: 'Inter, sans-serif',
  headings: {
    
  },
  colors: {
    // você pode definir cores personalizadas aqui, se quiser
    dark: [
      '#d5d7e0', // 0
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f66',
      '#34354a', // <- você pode mudar esse valor
      '#2b2c3d',
      '#1d1e30',
      '#0c0d21',
      '#01010a', // 9
    ],
  },
};

export const baseTheme: MantineThemeOverride = {
  primaryColor: 'blue',
  defaultRadius: 'md',
  fontFamily: 'Inter, sans-serif',
};