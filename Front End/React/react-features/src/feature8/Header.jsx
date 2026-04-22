import { Link, Outlet } from "react-router-dom";


let Header = () => {
    return (
        <>
            <ul className="flex justify-center flex-wrap">
                <Link to="/">
                    <li className="bg-yellow-700 text-blue-50 hover:bg-yellow-200 hover:text-blue-700 rounded-md shadow-md hover:shadow-lg w-[150px] m-3 p-2 text-center font-bold">
                        <i class="mx-2 fa-solid fa-shop"></i>
                        ecart-home
                    </li>
                </Link>

                <Link to="/products">
                    <li className="bg-yellow-700 text-blue-50 hover:bg-yellow-200 hover:text-blue-700 rounded-md shadow-md hover:shadow-lg w-[150px] m-3 p-2 text-center font-bold">
                        <i class="mx-2 fa-solid fa-tablet-screen-button"></i>
                        products
                    </li>
                </Link>

                <Link to="/cart">
                    <li className="bg-yellow-700 text-blue-50 hover:bg-yellow-200 hover:text-blue-700 rounded-md shadow-md hover:shadow-lg w-[150px] m-3 p-2 text-center font-bold">
                        <i class="mx-2 fa-solid fa-dolly"></i>
                        cart
                    </li>
                </Link>

                <Link to="/support">
                    <li className="bg-yellow-700 text-blue-50 hover:bg-yellow-200 hover:text-blue-700 rounded-md shadow-md hover:shadow-lg w-[150px] m-3 p-2 text-center font-bold">
                        <i class="mx-2 fa-solid fa-circle-question"></i>
                        support
                    </li>
                </Link>

            </ul>

            <div className="border-red-50 border-3 rounded-xl mx-[100px] mt-3 p-2 flex justify-center">
                <Outlet />
            </div>
        </>
    )
}

export default Header;