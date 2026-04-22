import { useState } from "react";
import data from "./data";
import { Link } from "react-router-dom";


let Products = () => {
    let [q, setQuantity] = useState();
    return (
        <>
            <div className="flex flex-wrap justfy-around">
                {data.map(item=><div className="w-[200px] m-2 p-2 rounded-md shadow-md">
                    <p className="font-bold text-blue-950 m-1">{item.title}</p>
                    <p className="text-gray-800 text-sm m-1">{item.description}</p>
                    
                    <div className="flex justify-center my-3">
                        qtys = 
                        <input onChange={event=>setQuantity(Number(event.target.value))} type="number" className="bg-white text-center" placeholder="13" min="1" max="10"/>
                    </div>

                    <p className="text-green-600 font-bold text-lg m-1 text-center">INR {item.cost}</p>
                    <div className="flex justify-center mt-4">
                        <Link to={`/cart?id=${item.id}&qty=${q}`} className="hover:text-blue-950 text-blue-700 text-center font-bold w-[150px] text-lg">Add to Cart</Link>
                    </div>
                    
                </div>)}
            </div>
        </>
    )
}

export default Products;