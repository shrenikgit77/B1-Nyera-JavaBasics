
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";

let Example8 = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Header />}>
                        <Route path="" element={<HomePage />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/support" element={<h1 className="text-center m-2">Help Desk 1800 900 899</h1>} />
                        <Route path="*" element={<h1 className="text-red-500 text-center m-2 text-2xl">404-Not Found</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Example8;