import React from 'react'
import ThemeContext from './ThemeContext'

const ThemeChangerProvider = ({children}) => {
    const [theme, setTheme] =  React.useState('gray')
    const [themetext, setThemetext] = React.useState('black')

    const changeTheme = () => {
        if(theme === 'gray'){
            setTheme("black")
        }
        else{
            setTheme( 'gray' )
        }

        if(themetext === 'black'){
            setThemetext('white')
        }
        else{
            setThemetext( 'black' )
        }
    }

  return (
    <ThemeContext.Provider value={{theme, changeTheme, themetext}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeChangerProvider