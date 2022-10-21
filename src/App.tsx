import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import Routes from './routes';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor={theme.COLORS.BACKGROUND} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
