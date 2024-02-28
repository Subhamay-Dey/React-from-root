import React from 'react';
import {useState} from 'react';
import arr from "../components/product";

const Props = () => {

     const [cart, setCart] = useState('');
    const [cost , setCost] = useState(0);
    const [heart , setHeart] = useState('heart-empty.png');

    const toggleLike = () => {

        if(heart==='heart-filled.png'){
            setHeart('heart-empty.png')
        }
        else{
            if(heart==='heart-empty.png'){
                setHeart('heart-filled.png')
            }
            else{
                setHeart('heart-empty.png')
            }
        }
    };

    const handleClick = (product) => {
      setCart=((items)=> [...items, product])
    }

  return (
    <>
      <div>
          {arr.map((items) => (
            <div className="px-12 justify-center items-center">
            <div className="flex font-sans pt-16 justify-center">
          <div className="flex-none w-56 relative">
            <img src={items.src} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg"/>
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto font-semibold text-xl text-slate-900">
                {/* {product} */}
              </h1>
              <div className="w-full flex-none  order-1 text-3xl font-bold text-violet-600">
                {items.price}
              </div>
              <div className="font-medium text-lg text-slate-400">
                {/* {stock} */}
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm font-bold">
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="xs"/>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white" onClick={() => setCost(items.price=12)}>
                    XS
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="s" />
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white" onClick={() => setCost(items.price=16)}>
                    S
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="m"/>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white" onClick={() => setCost(items.price=20)}>
                    M
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="l"/>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white" onClick={() => setCost(items.price=25)}>
                    L
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="xl" />
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white" onClick={() => setCost(items.price=30)}>
                    XL
                  </div>
                </label>
              </div>
            </div>
            <div className="flex space-x-4 mb-5 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                  Buy now
                </button>
                <button className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button" onClick={()=> (handleClick)}>
                  Add to bag
                </button>
              </div>
              <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                <img src={heart} alt="" onClick={toggleLike}/>
              </button>
            </div>
            <p className="text-sm text-slate-500">
              Free shipping on all continental Indian orders.
            </p>
          </form>
        </div>
        </div>
          ))}
      </div>
    </>
  )
}

export default Props