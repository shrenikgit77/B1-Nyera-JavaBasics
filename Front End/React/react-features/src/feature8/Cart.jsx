import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "./data";
import ECartContext from "./ECartContext";


let Cart = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);

    const id = queryParam.get("id");
    const qty = queryParam.get("qty");

  
    const {cartItems, setCartItems} = useContext(ECartContext);

    let removeFromCart = (id) => {
        setCartItems(cartItems.filter(item=>item.id!=id));
    }

    useEffect(()=>{
        let product = data.find(item=>item.id==id);
        
        if(product)
        {
            setCartItems([...cartItems, product]);
        }
    }, [])

    return (
        <>
            <div className="flex justify-around flex-wrap">
                {cartItems.map(item=><div className="m-2 shadow-lg rounded-lg w-[300px] p-2">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.category}</p>
                        <p>{item.cost}</p>
                        <button onClick={()=>removeFromCart(item.id)} className="m-2 p-2 text-red-500 bg-yellow-50 rounded-md shadow-md hover:text-red-600">remove</button>

                </div>)}
            </div>
           
        </>
    )
}

export default Cart;