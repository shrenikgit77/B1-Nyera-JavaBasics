import { useContext } from "react"
import NumberContext from "./NumberContext"


let C4 = () => {
    const {x, setValue} = useContext(NumberContext);

    let button_click = () => {
        var no = prompt("Enter new number :");
        setValue(no);
    }

    return (
        <>
            <p className="text-md text-green-800 m-2 ps-5">C4 Component</p>
            <p className="text-md m-2">C4 Number = {x}</p>
            <button onClick={()=>button_click()} className="text-md w-[150px] text-red-400 bg-gray-200 hover:shadow-lg hover:text-blue-900 p-2 m-2">Change Number</button>
        </>
    )
}


let C3 = () => {
    return (
        <>
            <p className="text-md text-green-800 m-2 ps-4">C3 Component</p>
            <C4 />
        </>
    )
}
let C2 = () => {
    return (
        <>
            <p className="text-md text-green-800 m-2 ps-3">C2 Component</p>
            <C3 />
        </>
    )
}

let C1 = () => {

    const {x,setValue} = useContext(NumberContext);


    return (
        <>
            <p className="text-md text-green-800 m-2">C1 Component</p>
            <p className="text-md m-2">C1 Number = {x}</p>
            <C2 />

            
        </>
    )
}


export default C1;