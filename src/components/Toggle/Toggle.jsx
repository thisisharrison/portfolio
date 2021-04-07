import React, { useContext, useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import { ThemeContext } from '../../context/context';
import './toggle.css';
import sun from '../../images/sun.png';
import moon from '../../images/moon.png';

const ThemeToggle = () => {
  const [dark, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.__setPreferredTheme('dark');
    } else {
      setTheme('light');
      window.__setPreferredTheme('light');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [theme]);

  return (
    <div className="theme-toggle-wrapper">
      <Toggle
        checked={dark}
        icons={{
          checked: (
            <img
              src={moon}
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: 'none' }}
            />
          ),
          unchecked: (
            <img
              src={sun}
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: 'none' }}
            />
          ),
        }}
        aria-label="Theme Toggle"
        onChange={handleChangeTheme}
      />
    </div>
  );
};

export default ThemeToggle;
