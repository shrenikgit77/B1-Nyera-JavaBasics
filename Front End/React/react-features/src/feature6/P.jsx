import { useState } from "react";
import C1 from "./Childrens";
import NumberContext from "./NumberContext";


let P = () => {
    let [x, setValue] = useState(10);
    
    return (
        <>
            <p className="text-blue-800 text-2xl font-bold m-2">Parent Component</p>
        
            <NumberContext.Provider value={{x,setValue}}>
                <C1/>
            </NumberContext.Provider>
        </>
    )
}


export default P;