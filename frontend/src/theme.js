import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4680FF',
      light: '#6B9BFF',
      dark: '#2D5ACC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6C14',
      light: '#FF8C47',
      dark: '#CC560F',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFD861',
      light: '#FFE28A',
      dark: '#CCA94E',
    },
    success: {
      main: '#3DDC97',
      light: '#64E3AC',
      dark: '#2FB079',
    },
    info: {
      main: '#B099CB',
      light: '#C3B1D6',
      dark: '#8D7AA2',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      light: '#F8F9FC',
      subtle: '#F0F2F8',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      disabled: '#8B8B8B',
      muted: '#6B6B6B',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (min-width:768px)': {
        fontSize: '4rem',
      },
      '@media (min-width:1024px)': {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (min-width:768px)': {
        fontSize: '3rem',
      },
      '@media (min-width:1024px)': {
        fontSize: '3.5rem',
      },
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
      '@media (min-width:768px)': {
        fontSize: '2.25rem',
      },
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
      '@media (min-width:768px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: '1.125rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.125rem',
      textTransform: 'none',
      letterSpacing: 0,
    },
    caption: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: '0.875rem',
      lineHeight: 1.43,
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(0, 0, 0, 0.05)',
    '0 4px 6px rgba(0, 0, 0, 0.07)',
    '0 10px 15px rgba(0, 0, 0, 0.1)',
    '0 20px 25px rgba(0, 0, 0, 0.15)',
    '0 25px 50px rgba(0, 0, 0, 0.25)',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
    '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
    '0 20px 40px rgba(0,0,0,0.2)',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
    '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
    '0 20px 40px rgba(0,0,0,0.2)',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
    '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
    '0 20px 40px rgba(0,0,0,0.2)',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
    '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '18px 36px',
          fontSize: '1.125rem',
          fontWeight: 600,
          minHeight: 56,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #FFD861 0%, #FF6C14 100%)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(135deg, #FFE28A 0%, #FF8C47 100%)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderRadius: 50,
          padding: '16px 32px',
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 50,
            '& fieldset': {
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width:768px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
  },
});

export default theme;
