import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/hgs2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState("light");

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const html = window.document.documentElement;
        html.classList.remove("light");
        html.classList.remove("dark");
        html.classList.add(dark);

    }, [dark]);

    return (
        <>
            <header className='w-full container mx-auto z-50'>
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
                            menuOpen ? <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faXmark} className='w-[30px] h-[30px] lg:hidden inline dark:text-white' /> :
                                <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faBars} className='w-[30px] h-[30px] lg:hidden inline dark:text-white' />
                        }

                        <ul className={`text-white dark:text-white text-[18px] lg:flex items-center lg:top-0 lg:relative font-semibold absolute duration-300 ease-in-out ${menuOpen ? "top-15 bg-black left-0 w-full text-left px-5 py-7 w-full block" : "top-[-300px] hidden"}`}>
                            <li className="py-2 px-3 text-white lg:text-black dark:text-white">
                                D {dark === "dark" ? <FontAwesomeIcon icon={faToggleOff} onClick={() => setDark("light")} /> : <FontAwesomeIcon icon={faToggleOn} onClick={() => setDark("dark")} />} L
                            </li>
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/">Home</NavLink>
                            </li>
                            {user &&
                                <>
                                    <li className="py-2 px-3">
                                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/manageitems">Manage Items</NavLink>
                                    </li>
                                    <li className="py-2 px-3">
                                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/additem">Add Item</NavLink>
                                    </li>
                                    <li className="py-2 px-3">
                                        <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/myitems">My items</NavLink>
                                    </li>
                                </>
                            }
                            <li className="py-2 px-3">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/blogs">Blogs</NavLink>
                            </li>
                            <li className="py-2 px-3">
                                {
                                    user ? <button className="text-red-500 font-bold" onClick={() => signOut(auth)}>SignOut</button> : <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black dark:text-white"} to="/signin">Sign In</NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;