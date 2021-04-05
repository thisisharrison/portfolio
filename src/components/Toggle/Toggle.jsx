import React, { useContext } from 'react'
import { ThemeContext } from '../../context/context'
import Toggle from 'react-toggle'
import "./toggle.css" 
import sun from '../../images/sun.png';
import moon from '../../images/moon.png';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      __setPreferredTheme('dark')
    } else {
      setTheme('light')
      __setPreferredTheme('light')
    }
    // debugging
    console.log(theme)
  }

  
  return (
    <div className="theme-toggle-wrapper">
      <Toggle
        defaultChecked={theme === 'dark'}
        icons={{checked: 
                  <img
                    src={moon}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                  />, 
                unchecked: 
                  <img
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                  />}}
        aria-label='Theme Toggle'
        onChange={handleChangeTheme} />
    </div>
  )
}

export default ThemeToggle;