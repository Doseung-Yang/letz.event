import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { headerNav } from "@/constants";
import LetzLogo from '@/assets/img/wadiz.svg'

const Header = () => {
    const [activeLink, setActiveLink] = useState("#intro");

    const handleClick = (e, url) => {
        e.preventDefault();
        setActiveLink(url);
        document.querySelector(url).scrollIntoView({ behavior: 'smooth' });
    }

    
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="letz_logo">
                    <Image
                        src={LetzLogo}
                        alt="Letz Logo" 
                        width={67.32} 
                        height={17.79}
                    />
                </div>
            </div>
            
            
        </header>
    )
}

export default Header
