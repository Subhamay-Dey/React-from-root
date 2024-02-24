import Card from './components/Card';
import ThemeChangerProvider from './context/ThemeChangerProvider';

function App() {

  return (
    <ThemeChangerProvider>
      <Card/>
    </ThemeChangerProvider>
  )
}

export default App
