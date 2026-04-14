import { useState } from "react";


let Example3 = () => {

    let age = 30;
    let username = "Shrenik";
    let [email, setEmail] = useState("shrenik1234@domain.com");  //hook
    //   variable, callback-function

    let button_click = () => {
        username = "Anant";
        console.log(username);
    }

    return (
        <>
            <div className="border-1 p-3 m-4 w-1/2 shadow-md rounded-xl hover:shadow-2xl">
                <h1 className="bg-blue-950 text-white text-center mb-4 p-3 text-3xl font-bold">React State vs Javascript variables</h1>
                <p>Username = {username}</p>
                <p>Email Id = {email}</p>
                <button onClick={()=>button_click()} className="bg-blue-950 text-white p-2 m-3 w-[150px] hover:shadow-lg">Change user</button>
                <button onClick={()=>setEmail("anant1234@domain.com")} className="bg-blue-950 text-white p-2 m-3 w-[150px] hover:shadow-lg">Change Email</button>
            </div>
        </>
    )
}

export default Example3;


/*


let useGreeting = () => { 
    let data = null;

    let setData = (...arg) => {
        100+ lines will effect something in virtual dom
        data = arg;
    }

        //  variable  function
    return [data, setData];
}

let response = useGreeting();

console.log(response[0]);
response[1]("anant@gmail.com");


let [email, setEmail] = useGreeting();
console.log(email);
setEmail("anant@gmail.com");


*/