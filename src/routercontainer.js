import About from "./about";
import Client from "./client";
import Contect from "./contect";
import Home from "./home";
import Service from "./service";

import 'aos'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Product from "./product";
import Addproduct from "./addproduct";
import Viewin from "./viewin";
import View from "./view";
import All from "./all";
import Cart from "./cart";
import Notfound from "./Notfound";
import { ModeOfTravelSharp } from "@mui/icons-material";
import Example from "./modals";
import Rrr from "./rrr";
// import Login from "./login";
// import Viewall from "./Viewall";

function Routercontainer
    () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contect" element={<Contect />} />
                    <Route path="/client" element={<Client />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/addproduct" element={<Addproduct />} />
                    <Route path="/addproduct/:id" element={<Addproduct />} />
                    <Route path="/viewin" element={<Viewin />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/all" element={<All />} />
                    <Route path="/cart/:id" element={<Cart />} />
                    <Route path="*" element={<Notfound />} />
                    <Route path="/modals" element={<Example />} />
                    <Route path="/rrr" element={<Rrr />} />
                    {/* <Route path="/Login" element={<Login />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Routercontainer;