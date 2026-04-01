import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <section className="flex items-center justify-center mt-10"> 
            <nav className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 flex items-center justify-between fixed rounded-full w-[80%]">
                <h1 className="text-xl font-bold">Company Name</h1>
                    <ul className="flex items-center justify-center  gap-x-4 text-lg font-medium">
                        <li className="hover:bg-black  rounded-full px-3 py-1.5 transition-all duration-300">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="hover:bg-black  rounded-full px-3 py-1.5 transition-all duration-300">
                            <Link to="/product">Product</Link>
                        </li>

                        <li className="hover:bg-black  rounded-full px-3 py-1.5 transition-all duration-300">
                            <Link to="/about">About us</Link>
                        </li>

                        <li className="hover:bg-black  rounded-full px-3 py-1.5 transition-all duration-300">
                            <Link to="/contect">Contact us</Link>
                        </li>

                    </ul>
                
            </nav>
        </section>
        </>
    )
};

export default NavBar;