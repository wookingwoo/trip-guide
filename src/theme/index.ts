import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
  },
  accent: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'full',
    },
    variants: {
      solid: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.600',
        color: 'white',
        _hover: {
          bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.700',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        transition: 'all 0.2s',
      }),
      outline: {
        borderColor: 'brand.500',
        color: 'brand.500',
        _hover: {
          bg: 'brand.50',
        },
      },
    },
  },
  Card: {
    baseStyle: (props: any) => ({
      container: {
        bg: props.colorMode === 'dark' ? 'whiteAlpha.100' : 'white',
        backdropFilter: 'blur(10px)',
        borderRadius: 'xl',
        boxShadow: 'xl',
        border: '1px solid',
        borderColor: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100',
      },
    }),
  },
};

const theme = extendTheme({ config, colors, fonts, styles, components });

export default theme;
