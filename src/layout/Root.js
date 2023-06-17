import React from 'react';
import { Outlet } from "react-router-dom";
import Navebar from "../page/Home/Footer/Navebar/Navebar"
import Footer from '../page/Home/Footer/Navebar/Footer'
const Root = () => {
    return (
        <div>
            <Navebar></Navebar>
            <div>
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;