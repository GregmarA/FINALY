import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainVistas from "../vistas/Main/MainVistas";
import AdminVistas from "../vistas/AdminVistas/AdminVistas";
import Error404 from "../vistas/Error/Error404";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Router = () => { 
    return (
        <BrowserRouter> 
            <Navbar />
            <Routes>
                <Route path="/" element={<MainVistas />} />
                <Route path="/admin" element={<AdminVistas />} />


                <Route path="/Error" element={<Error404 />} />
            </Routes>
            <Footer />
        
        </BrowserRouter>
         
    )
}
export default Router