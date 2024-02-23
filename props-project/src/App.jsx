import Props from "./components/Props";
import img1 from "../public/child1.jpg";
import img2 from "../public/child2.webp";
import img3 from "../public/child3.webp";
import img4 from "../public/child4.webp";

function App() {
  return (
    <>
    <div className="grid grid-cols-2 p-10 gap-8">
      <Props product='Kids wear' src={img1} stock='in stock'/>
      <Props product='Suit'      src={img2} stock='out of stock'/>
      <Props product='Casual'    src={img3} stock='in stock'/>
      <Props product='Traditional'src={img4} stock='in stock'/>
    </div>
    </>
  )
}

export default App