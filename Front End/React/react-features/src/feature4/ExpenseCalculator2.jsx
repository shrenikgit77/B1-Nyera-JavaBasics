import { useState } from "react";


let ExpenseCalculator2 = () => {
    let [expenses, setExpenses] = useState({grossary:0,electricity:0,fuel:0,internet:0,recharge:0, total:0});

    let read_textbox = (event) => {
        // var name = event.target.name;
        // var value = event.target.value;

        var {name, value} = event.target;
        setExpenses({...expenses, [name]:Number(value)});
    }

    let calculate_click = () => {
        setExpenses({...expenses, total:(expenses.grossary + expenses.electricity + expenses.fuel + expenses.internet + expenses.recharge)});
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col w-[300px]">
                    <input onChange={(event)=>read_textbox(event)} name="grossary" type="text" placeholder="grossary" className="border-1 text-center p-2 bg-yellow-50 m-2 shadow-md hover:bg-yellow-100 text-md" />

                    <input onChange={(event)=>read_textbox(event)} name="electricity" type="text" placeholder="electricity" className="border-1 text-center p-2 bg-yellow-50 m-2 shadow-md hover:bg-yellow-100 text-md" />

                    <input onChange={(event)=>read_textbox(event)} name="fuel" type="text" placeholder="fuel" className="border-1 text-center p-2 bg-yellow-50 m-2 shadow-md hover:bg-yellow-100 text-md" />

                    <input onChange={(event)=>read_textbox(event)} name="internet" type="text" placeholder="internet" className="border-1 text-center p-2 bg-yellow-50 m-2 shadow-md hover:bg-yellow-100 text-md" />

                    <input onChange={(event)=>read_textbox(event)} name="recharge" type="text" placeholder="recharge" className="border-1 text-center p-2 bg-yellow-50 m-2 shadow-md hover:bg-yellow-100 text-md" />

                    <button onClick={()=>calculate_click()} className="text-white bg-yellow-950 p-2 m-2 shadow-md hover:yellow-600 text-center rounded-lg hover:text-gray-100">Calcualte</button>

                    <h1 className="mt-4 text-center text-2xl">{expenses.total}</h1>
                </div>
            </div>
        </>
    )
}


export default ExpenseCalculator2;