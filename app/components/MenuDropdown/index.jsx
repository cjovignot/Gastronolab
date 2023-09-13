"use client"
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const DropdownMenu = ({props}) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            
            {isOpen && (
                <ul tabIndex={0} className="menu  w-[170px] dropdown-content mt-3 z-[1] p-2 shadow text-black bg-white rounded-box">
                    <li>
                        <Link
                            href='/pages/myProfile'
                            className='btn-sm btn-outline'
                            onClick={closeDropdown}
                        >{t("menu.pages.profile.title")}</Link>
                    </li>
                    <li>
                        <Link
                            href='/pages/favorites'
                            className='btn-sm btn-outline'
                            onClick={closeDropdown}
                        >{t("menu.pages.favorites.title")}</Link>
                    </li>
                    <li>
                        <Link
                            href='/pages/culture'
                            className='btn-sm btn-outline'
                            onClick={closeDropdown}
                        >{t("menu.pages.culture.title")}</Link>
                    </li>
                    <li>
                        <Link
                            href='/pages/reciepes/seasons'
                            className='btn-sm btn-outline'
                            onClick={closeDropdown}
                        >{t("menu.pages.season_reciepes.title")}</Link>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default DropdownMenu;