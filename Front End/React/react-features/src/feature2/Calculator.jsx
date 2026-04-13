

let Calculator = () => {
    return (
        <div>
            <div className="w-[250px] rounded-xl shadow-xl hover:shadow-gray-950 p-1 m-4">
                <h1 className="bg-blue-950 rounded-t-xl p-2 text-white font-bold text-center">Calculator</h1>
                <div className="grid-cols-2 grid gap-2 p-2">
                    <input type="text" placeholder="num1" className="p-2 m-2 border-black bg-yellow-200 rounded w-full text-center" />
                    <input type="text" placeholder="num2" className="p-2 m-2 border-black bg-yellow-200 rounded w-full text-center" />
                </div>

                <div className="flex-col flex justify-center items-center">
                    <button className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                        Addition
                    </button>

                     <button className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                        Subtraction
                    </button>

                     <button className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                        Multiplication
                    </button>

                     <button className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                        Division
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;