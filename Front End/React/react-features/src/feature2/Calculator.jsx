import { useState } from "react";


let Calculator = () => {

    let [no1, setNumber1] = useState(0);
    let [no2, setNumber2] = useState(0);
    let [answer, setAnswer] = useState(0);

    let addition = () => {
        setAnswer(no1 + no2);
    }

    let subtraction = () => {
        setAnswer(no1 - no2);
    }

    let multiplication = () => {
        setAnswer(no1 * no2);
    }

    let division = () => {
        setAnswer(no1 / no2);
    }

    return (
        <div>
           
            <div className="w-[250px] rounded-xl shadow-xl hover:shadow-gray-950 p-1 m-4">
                <h1 className="bg-blue-950 rounded-t-xl p-2 text-white font-bold text-center">Calculator</h1>
                <div className="grid-cols-2 grid gap-2 p-2">
                    <input onChange={(event)=>setNumber1(Number(event.target.value))} type="text" placeholder="num1" className="p-2 m-2 border-black bg-yellow-200 rounded w-full text-center" />
                    <input onChange={(event)=>setNumber2(Number(event.target.value))} type="text" placeholder="num2" className="p-2 m-2 border-black bg-yellow-200 rounded w-full text-center" />
                </div>

                <div className="flex-col flex justify-center items-center">
                    <button onClick={()=>addition()} className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                        Addition
                    </button>

                     <button onClick={()=>subtraction()} className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                        Subtraction
                    </button>

                     <button onClick={()=>multiplication()} className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                        Multiplication
                    </button>

                     <button onClick={()=>division()} className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                        Division
                    </button>

                    <h1 className="text-center text-2xl mt-3">{answer}</h1>
                </div>
            </div>
        </div>
    )
}

export default Calculator;