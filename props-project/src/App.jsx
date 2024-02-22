import Props from "./components/Props";
import img1 from "../public/child1.jpg";
import img2 from "../public/child2.webp" ;
import img3 from "../public/child3.webp" ;

function App() {
  return (
    <>
    <div className="flex  gap-8">
      <Props product='jama' src={img1} />
      <Props product='pant' src={img2}/>
      <Props product='haha' src={img3}/>
    </div>
    </>
  )
}

export default App
