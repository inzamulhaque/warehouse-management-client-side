import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/hgs2.jpg';
import menu from '../../images/icons/menu.png';
import close from '../../images/icons/close.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState("light");

    useEffect(() => {
        const html = window.document.documentElement;
        html.classList.remove("light");
        html.classList.remove("dark");
        html.classList.add(dark);

    }, [dark]);

    return (
        <>
            <header className='w-full container mx-auto'>
                <nav className="flex items-center py-2 justify-between px-1">
                    <div>
                        <Link to="/" className='flex items-center'>
                            <img src={logo} alt="logo" className='w-[30px] h-[30px]' />
                            <h3 className="text-[20px] lg:text-[30px] text-blue-500 font-bold pl-2">Haque Grocery's</h3>
                        </Link>
                    </div>
                    <div>
                        {/* add open and closing menu icons */}
                        {
                            menuOpen ? <img onClick={() => setMenuOpen(!menuOpen)} src={close} alt="menu icon" className='w-[30px] h-[30px] lg:hidden inline dark:bg-white' /> :
                                <img onClick={() => setMenuOpen(!menuOpen)} src={menu} alt="menu icon" className='w-[30px] h-[30px] lg:hidden inline dark:bg-white' />
                        }

                        <ul className={`text-white dark:text-white text-[18px] lg:flex items-center lg:top-0 lg:relative font-semibold absolute duration-300 ease-in-out ${menuOpen ? "top-15 bg-black left-0 w-full text-left px-5 py-7 w-full block" : "top-[-300px] hidden"}`}>
                            <li className="py-2 px-3 text-white lg:text-black dark:text-white">
                                D {dark === "dark" ? <FontAwesomeIcon icon={faToggleOff} onClick={() => setDark("light")} /> : <FontAwesomeIcon icon={faToggleOn} onClick={() => setDark("dark")} />} L
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/">Home</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/manageitems">Manage Items</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/additem">Add Item</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/myitems">My items</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/blogs">Blogs</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                <button className="text-red-500 font-bold">SignOut</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;