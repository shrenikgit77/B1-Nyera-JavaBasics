import { useState } from "react";


let UserAccount1 = () => {

    let [firstname, setFirstname] = useState("");
    let [lastname, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [location, setLocation] = useState("");

    let [userData, setUserData] = useState(null);

    let submit_click = () => {
        setUserData({firstname:firstname, lastname:lastname, email:email, password:password, location:location});

        console.log(firstname,lastname, email, password, location);
    }

    return (
        <>
            <div className="flex justify-center p-4">
                <div className="border-3 border-red-500 hover:border-red-700 shadow-lg rounded-lg hover:shadow-xl">
                    <h1 className="text-center bg-red-500 hover:bg-red-700 text-white text-2xl rounded-t-md">New user?</h1>
                    <div className="p-2 flex flex-col">
                        <input onChange={(event)=>setFirstname(event.target.value)} type="text" placeholder="firstname" className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md" />
                        <input onChange={(event)=>setLastName(event.target.value)} type="text" placeholder="lastname" className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md" />
                        <input onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="email" className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md" />
                        <input onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="password" className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md" />
                        <select onChange={(event)=>setLocation(event.target.value)} className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md">
                            <option>Select Location</option>
                            <option>Maharashtra</option>
                            <option>Karnataka</option>
                            <option>Gujrat</option>
                            <option>Andhra Pradesh</option>
                            <option>Tamilnadu</option>
                            <option>Kerala</option>
                        </select>

                        <button onClick={()=>submit_click()} className="bg-red-500 hover:bg-red-700 text-white font-bold text-center p-2 m-2 rounded-lg shadow-md hover:shadow-lg">Submit</button>
                    </div>
                </div>

                <pre>{JSON.stringify(userData, null, 3)}</pre>
            </div>
        </>
    )
}

export default UserAccount1;