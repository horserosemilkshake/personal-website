import React from 'react';
import icon from './images/logo.png';
import { Linkedin, Instagram, Github } from 'react-bootstrap-icons';

export default function Navbar() {
    return (
        <nav className="px-2 sm:px-4 py-2.5 bg-zinc-900 shadow-lg sticky top-0 z-50 opacity-80">
            <div className="flex justify-between items-center mx-auto flex-col md:flex-row">
                <div className="flex items-center">
                    <img src={icon} className="mr-3 h-12 sm:h-15" alt="THC Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-yellow-500">Eric Tsoi's Personal Website</span>
                </div>
                <div className="w-full md:block md:w-auto">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="https://github.com/horserosemilkshake/" className="lg:visible block py-2 pr-4 pl-3 text-xl font-semibold text-white border-b border-gray-100 hover:text-yellow-500 md:border-0 md:hover:text-yellow-500 md:p-0"><Github /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/eric-tsoi-8606471ab/" className="lg:visible block py-2 pr-4 pl-3 text-xl font-semibold text-white border-b border-gray-100 hover:text-yellow-500 md:border-0 md:hover:text-yellow-500 md:p-0"><Linkedin /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/whitecardbb/" className="lg:visible block py-2 pr-4 pl-3 text-xl font-semibold text-white border-b border-gray-100 hover:text-yellow-500 md:border-0 md:hover:text-yellow-500 md:p-0"><Instagram /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}