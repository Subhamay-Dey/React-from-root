import Navbara from "./components/Navbara";
import Cart from "./components/Cart";
import PProvider from "./contexts/PProvider";

function App() {
  return (
    <PProvider>
      <Navbara/>
      <Cart/>
    </PProvider>
  )
}

export default App