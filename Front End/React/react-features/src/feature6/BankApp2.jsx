import { useContext, useState } from "react"
import BankContext from "./BankContext"


let Header = () => {
    const {selected} = useContext(BankContext);

    return (
        <>
            <div className="flex justify-between bg-blue-950 shadow-b-lg mb-5">
                <h1 className="text-2xl text-white ">My Bank App</h1>
                <div className="">
                    <p className="m-1 p-1 text-white">Account Number :{selected?.accountNumber}</p>
                    <p className="m-1 p-1 text-white">Balanace :{selected?.balance}</p>
                </div>
            </div>
        </>
    )
}

let AccountsTable = () => {
    const {data, setSelected} = useContext(BankContext);

    return (
        <>
            <table className="border-1 m-2">
                <thead>
                    <tr>
                        <th className="text-blue-800 font-bold px-3">Account Number</th>
                        <th className="text-blue-800 font-bold px-3">Account Name</th>
                        <th className="text-blue-800 font-bold px-3">Balance</th>
                        <th className="text-blue-800 font-bold px-3">Status</th>
                        <th className="text-blue-800 font-bold px-3">Action</th>
                    </tr>
                </thead>

                <tbody>
                        {data.map(item=>
                            <tr>
                                <td className="px-3">{item.accountNumber}</td>
                                <td className="px-3">{item.name}</td>
                                <td className="px-3">{item.balance}</td>
                                <td className="px-3">{item.status}</td>
                                <td className="px-3">
                                    <button onClick={()=>setSelected(item)} className="px-3 py-1 m-2 bg-purple-800 hover:bg-purple-950 text-white hover:text-yellow-300">View</button>
                                </td>
                            </tr>

                        )}
                </tbody>
            </table>
        </>
    )
}



let BankApp2 = () => {

    let [data, setData] = useState([
        {accountNumber:9083983, name:"James Devid", balance:"INR 80000", status:"ACTIVE"},
        {accountNumber:9898421, name:"Peter Mathew", balance:"INR 74000", status:"ACTIVE"},
        {accountNumber:4298983, name:"Elij Kang", balance:"INR 41000", status:"INACTIVE"},
        {accountNumber:1909411, name:"Peter Devid", balance:"INR 42000", status:"ACTIVE"},
        {accountNumber:4298914, name:"John Watson", balance:"INR 41000", status:"ACTIVE"},
    ]);

    let [selected, setSelected] = useState(null);

    return (
        <>
            <BankContext.Provider value={{data, selected, setSelected}}>
                <Header />
                <AccountsTable />
            </BankContext.Provider>
        </>
    )
}


export default BankApp2;