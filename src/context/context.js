import React from 'react';

const PortfolioContext = React.createContext();
const ThemeContext = React.createContext('light');

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default PortfolioContext;
