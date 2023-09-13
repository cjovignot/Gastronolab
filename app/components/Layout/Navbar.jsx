"use client"
import Link from "next/link";
import Modal from '../Modal/modal'
import AddModal from '../addModal/addModal'
import SearchBar from '../searchBar/searchBar'
import DropdownMenu from '../MenuDropdown'
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react'

/**
 * Navbar element
 */
const Navbar = () => {
    const { t } = useTranslation();
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
        <div className="navbar bg-red-800 text-white h-20">
            <div className="navbar-start">
                <DropdownMenu />
                <SearchBar />
            </div>
            <div className="navbar-center">
                <Link href="/" className="btn btn-ghost normal-case text-xl">{t("gastronolab.title")}</Link>
            </div>
            <div className="navbar-end">
                <AddModal />

                <Link onClick={()=>window.my_modal_1.showModal()} href="" className="btn btn-sm btn-ghost normal-case text-md">{t("buttons.login.title")}</Link>
                <Link onClick={()=>window.my_modal_2.showModal()} href="" className="btn btn-sm btn-ghost normal-case text-md">{t("buttons.signup.title")}</Link>
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
