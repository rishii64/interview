import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import Dynamic from "./Dynamic";

export default function RouteCompo(){
    return (
        <>
            {/* <h1>Route Page</h1> */}
            <BrowserRouter>
                <Link to='/'>Home -- </Link>
                <Link to='/Student'>Student -- </Link>
                <Link to='/contact'>Contact</Link>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/Student" element={<Student/>} ></Route>
                    <Route path="/contact" element={<Contact />} ></Route>
                    <Route path="/Student/:id" element={<Dynamic/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}