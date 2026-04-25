import axios from "axios"
import { useEffect, useState } from "react";


let Products = () => {

    let [loading, setLoading] = useState(false);
    let [data, setData] = useState([]);
    let [error, setError] = useState(null);

    let remove_product = async(id) => {
        setLoading(true);
        await axios.delete(`http://localhost:7979/products/${id}`)
        .then(response=>{
            alert("success")
        })  
        .catch(error=>{
                        console.log(error);
                        setError(error);
                    })
                    .finally(()=>{
                        setLoading(false);
                    })
    }

    let fetch_products = async() => {
        setLoading(true);

        await axios.get("http://localhost:7979/products")
                    .then(response=>{
                        setData(response.data);
                    })
                    .catch(error=>{
                        console.log(error);
                        setError(error);
                    })
                    .finally(()=>{
                        setLoading(false);
                    })
    }

    useEffect(()=>{
        fetch_products();
    },[])

    if(loading)
        return <h1 className="text-center m-2 text-2xl">loading...</h1>

    if(error)
        return <h1 className="text-center m-2 text-2xl text-red-500">Error Occurred. Try after sometime...</h1>

    return (
        <>
            {data.map(item=><div className="my-3 mx-[100px] shadow-md rounded-md">
                <div className="grid grid-cols-5 hover:border-blue-700 hover:border-2">
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <p>{item.description}</p>
                    <p>{item.cost}</p>
                    <button onClick={()=>remove_product(item.id)} className="bg-red-500 m-2 p-1 w-[100px] text-white font-bold text-center hover:bg-red-700 hover:shadow-lg">remove</button>
                </div>
            </div>)}
        </>
    )
}

export default Products;