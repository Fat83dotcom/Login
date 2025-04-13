import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // para estilos base
import { darkTheme } from './theme.ts';


// const theme = createTheme({
//   fontFamily: 'Open Sans, sans-serif',
//   primaryColor: 'cyan',
//   colors: {
    
//   }
// })

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <MantineProvider theme={darkTheme}>
      <App />
    </MantineProvider>
  </StrictMode>
  
)
