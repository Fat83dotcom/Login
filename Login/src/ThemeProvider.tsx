// ThemeProvider.tsx
import { MantineProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { ReactNode } from 'react';
import { baseTheme } from './theme';

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  return (
    <MantineProvider
      theme={baseTheme} // <- NÃO inclua `colorScheme` aqui
      colorScheme={colorScheme} // <- Passe aqui
      onColorSchemeChange={setColorScheme}
    >
      {children}
    </MantineProvider>
  );
}
