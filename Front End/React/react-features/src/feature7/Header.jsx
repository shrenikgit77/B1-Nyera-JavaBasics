import { Link, Outlet } from "react-router-dom";


let Header = () => {
    return (
        <>
            <ul className="bg-blue-950 text-white p-2 shadow-b-md flex justify-between">
                <Link to="/"><li className="bg-white rounded-lg hover:text-blue-500 hover:bg-gray-50 text-blue-950 p-2 font-bold">Home Page</li></Link>
                <Link to="/page1"><li className="bg-white rounded-lg hover:text-blue-500 hover:bg-gray-50 text-blue-950 p-2 font-bold">Page1</li></Link>
                <Link to="/page2"><li className="bg-white rounded-lg hover:text-blue-500 hover:bg-gray-50 text-blue-950 p-2 font-bold">Page2</li></Link>
                <Link to="/page3"><li className="bg-white rounded-lg hover:text-blue-500 hover:bg-gray-50 text-blue-950 p-2 font-bold">Page3</li></Link>
                <Link to="/page4"><li className="bg-white rounded-lg hover:text-blue-500 hover:bg-gray-50 text-blue-950 p-2 font-bold">Page4</li></Link>
                <Link to="/page5"><li className="bg-white rounded-lg hover:text-blue-500 hover:bg-gray-50 text-blue-950 p-2 font-bold">Page5</li></Link>
            </ul>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Header;