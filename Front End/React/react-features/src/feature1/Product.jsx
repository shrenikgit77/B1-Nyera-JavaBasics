

let Product = (props) => {
    return (
        <>
            {props.stock.map(item=>
                <div className="m-4 p-2 bg-yellow-300 rounded-xl shadow-md border-1 border-red-600 w-[300px]">
                    <div className="text-black">
                        <p><b>{item.title}</b></p>
                        <p className="text-gray-800">{item.description}</p>
                        <p className="text-blue-900"><b>Cost : {item.cost}</b></p>
                        <p>Available : {item.available} qtys</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="p-2 text-center m-4 w-[100px] bg-red-800 text-white hover:bg-red-900 rounded-md hover:shadow-md">Add to cart</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Product;