import axios from "axios";


let Demo = () => {

    let fetchUsers = async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = await response.data;
        console.log(JSON.stringify(data, null, 0));
    }

    return (
        <>
            <p className="m-2 p-2 text-2xl font-bold">Lets Learn axios http request + response</p>
            <hr/>

            <button onClick={()=>fetchUsers()} className="font-bold text-center m-2 p-2 bg-blue-500 hover:bg-blue-900 hover:text-white">Fetch Users</button>
        </>
    )
}

export default Demo;