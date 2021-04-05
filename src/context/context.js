import React from 'react';

const PortfolioContext = React.createContext();
export const ThemeContext = React.createContext();

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default PortfolioContext;
