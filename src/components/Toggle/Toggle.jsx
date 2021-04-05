import React, { useState } from 'react'
import Toggle from 'react-toggle'
import "./toggle.css" 
import sun from '../../images/sun.png';
import moon from '../../images/moon.png';

const ThemeToggle = () => {
  const [newTheme, setNewTheme] = useState('light')

  const handleChangeTheme = () => {
    if (newTheme === 'light') {
      setNewTheme('dark')
    } else {
      setNewTheme('light')
    }
  }

  
  return (
    <div className="theme-toggle-wrapper">
      <Toggle
        defaultChecked={newTheme}
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