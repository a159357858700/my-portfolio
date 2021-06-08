import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                     <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-white" 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-4xl font-bold cursive tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-white">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About Me!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}