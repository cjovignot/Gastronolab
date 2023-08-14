import Link from "next/link";
import Modal from '../Modal/modal'
import AddModal from '../addModal/addModal'
import SearchBar from '../searchBar/searchBar'
import React, { useState, useEffect } from 'react'

/**
 * Navbar element
 */
const Navbar = () => {
    const [showButton, setShowButton] = useState(false);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);


    return (
        <div className="navbar bg-red-800 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-white rounded-box">
                    <li><Link href='/pages/myProfile' className='btn-sm btn-outline'>Profile</Link></li>
                    <li><Link href='/pages/favorites' className='btn-sm btn-outline'>Favorites</Link></li>
                </ul>
                </div>
                <SearchBar />
            </div>
            <div className="navbar-center">
                <Link href="/" className="btn btn-ghost normal-case text-xl">GastronoLab</Link>
            </div>
            <div className="navbar-end">
                <AddModal />

                <Link onClick={()=>window.my_modal_1.showModal()} href="" className="btn btn-sm btn-ghost normal-case text-md">Login</Link>
                <Link onClick={()=>window.my_modal_2.showModal()} href="" className="btn btn-sm btn-ghost normal-case text-md">SignUp</Link>
                <Modal />
            </div>
            
            <button
                className={`back-to-top btn btn-square btn-outline text-black hover:bg-red-800 fixed bottom-5 right-8 ${showButton ? "visible" : "hidden"}`}
                onClick={backToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

export default Navbar;
