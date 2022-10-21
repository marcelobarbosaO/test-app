import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '#Theme/index';

const Wrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Wrapper;
