import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/hgs2.jpg';

const Header = () => {
    return (
        <>
            <header>
                <nav className="container mx-auto py-2 flex items-center justify-between px-2">
                    <div>
                        <Link to="/" className='flex items-center'>
                            <img src={logo} alt="logo" className='w-[30px] h-[30px]' />
                            <h3 className="text-[30px] text-blue-500 font-bold pl-2">Haque Grocery's</h3>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;