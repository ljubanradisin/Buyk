import {useState, useEffect} from 'react';
import Image from 'next/image';
import React from 'react';
import LogoImg from '../../assets/logo/logo.png';
import MagnifierImg from '../../assets/icons/Magnifier.png'
import HamburgerImg from '../../assets/icons/Hamburger.png'
import BurgerNavigation from './BurgerNavigation';
import NavBar from './navbar';

const hamburgerWidth = 45;
const hamburgerHeight = hamburgerWidth / (35 / 50);

const magnifierWidth = 26;
const magnifierHeight = magnifierWidth / (26 / 25);

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (isClicked) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    }, [isClicked]);

    return (
        <div className="flex flex-col bg-buyk-green content-center">
            <div className="flex flex-row">
                <div className="z-10 flex items-center m-2">
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={200}
                        height={50}
                        alt="Buyk logo"
                    />
                </div>
                <div className="flex w-full items-center place-content-center">
                    <input type="text" placeholder="Search"></input>
                </div>
                <div className="flex items-center sm:hidden">
                        <BurgerNavigation isOpen={isClicked} />
                        <Image
                            className="cursor-pointer z-0"
                            src={MagnifierImg}
                            layout="fixed"
                            width={magnifierWidth}
                            height={magnifierHeight}
                            alt="Menu"
                        />
                        <div className="w-8">
                        <Image
                            onClick={() => setIsClicked(!isClicked)}
                            className={`transform scale-75 cursor-pointer z-50 transition-all ease-linear duration-500 ${
                                isClicked ? 'transform rotate-90' : ''
                            }`}
                            src={HamburgerImg}
                            layout="fixed"
                            width={hamburgerWidth}
                            height={hamburgerHeight}
                            alt="Menu"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row place-content-center">
                <NavBar/>
            </div>
        </div>
    );
};

export default Header;