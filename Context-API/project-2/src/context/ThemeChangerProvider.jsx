import React from 'react'
import ThemeChanger from './context'

const ThemeChangerProvider = ({children}) => {
    const [theme, setTheme] =  React.useState('gray')
    const [themetext, setThemetext] = React.useState('black')
    const [btnchange, setBtnchange] = React.useState('black')

    const changeTheme = () => {
        if(theme === 'black'){
            setThemetext("white")
        }
        else{
            setThemetext( "black" )
        }
    }

  return (
    <ThemeChanger.Provider value={{theme, changeTheme, themetext, btnchange}}>
      {children}
    </ThemeChanger.Provider>
  )
}

export default ThemeChangerProvider