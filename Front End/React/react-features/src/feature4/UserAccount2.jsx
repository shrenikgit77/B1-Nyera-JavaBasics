import { useState } from "react";


let UserAccount2 = () => {

    let [formData, setFormData] = useState({firstname:"", lastname:"", email:"", password:"", location:""});

    return (
        <>
            <div className="flex justify-center p-4">
                <div className="border-3 border-red-500 hover:border-red-700 shadow-lg rounded-lg hover:shadow-xl">
                    <h1 className="text-center bg-red-500 hover:bg-red-700 text-white text-2xl rounded-t-md">New user?</h1>
                    <div className="p-2 flex flex-col">
                        <input onChange={(event)=>setFormData({...formData, firstname:event.target.value})} type="text" placeholder="firstname" className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md" />
                        <input onChange={(event)=>setFormData({...formData, lastname:event.target.value})} type="text" placeholder="lastname" className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md" />
                        <input onChange={(event)=>setFormData({...formData, email:event.target.value})} type="email" placeholder="email" className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md" />
                        <input onChange={(event)=>setFormData({...formData, password:event.target.value})} type="password" placeholder="password" className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md" />
                        <select onChange={(event)=>setFormData({...formData, location:event.target.value})} className="bg-yellow-50 p-2 my-2 mx-1 hover:bg-yellow-100 shadow-md rounded-md">
                            <option>Select Location</option>
                            <option>Maharashtra</option>
                            <option>Karnataka</option>
                            <option>Gujrat</option>
                            <option>Andhra Pradesh</option>
                            <option>Tamilnadu</option>
                            <option>Kerala</option>
                        </select>

                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-center p-2 m-2 rounded-lg shadow-md hover:shadow-lg">Submit</button>
                    </div>
                </div>
                <pre>{JSON.stringify(formData, null, 3)}</pre>
            </div>
        </>
    )
}

export default UserAccount2;