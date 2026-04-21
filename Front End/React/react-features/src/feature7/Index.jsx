import Header from "./Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Homepage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";


let Example7 = () => {
    return (
        <>
           

            <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Header />}>
                                <Route path="" element={<HomePage />} />
                                <Route path="page1" element={<Page1 />} />
                                <Route path="page2" element={<Page2 />} />
                                <Route path="page3" element={<Page3 />} />
                                <Route path="page4" element={<Page4 />} />
                                <Route path="page5" element={<Page5 />} />
                                <Route path="*" element={<h1 className="text-4xl text-center m-2 text-red-500">404-Not Found</h1>}/>
                        </Route>
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default Example7;