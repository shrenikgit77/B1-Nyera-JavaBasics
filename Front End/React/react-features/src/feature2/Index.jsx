import Calculator from "./Calculator";


let Example2 = () => {


    let button_click = (color) => {
        alert("You just clicked button");
    }

    let textbox_change = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <button onClick={()=>button_click("red")} className="bg-blue-950 text-white text-md font-bold text-center m-2 p-2 hover:shadow-md rounded-md w-[150px]">
                Click Me
            </button>

            <input onChange={(e)=>textbox_change(e)} type="text" placeholder="write here..." className="p-2 m-2 border-black bg-yellow-200 rounded w-1/2" />

            <Calculator />
        </>
    )
}

export default Example2;