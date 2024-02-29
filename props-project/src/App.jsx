import Navbara from "./components/Navbara";
import Cart from "./components/Cart";
import PProvider from "./contexts/PProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Props from "./components/Props";

function App() {
  return (
    <PProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Props/>}></Route>
          <Route path="/CartPage" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </PProvider>
  )
}

export default App