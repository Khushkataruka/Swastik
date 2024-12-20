import React from 'react';
import Swastik from './Swastik';
import a from 'next/link';

const Footer = () => {
    return (
        <footer className="rounded-lg shadow bg-[#1f5e96] m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Swastik />
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="hover:underline me-4 md:me-6">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline me-4 md:me-6">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center">
                    © 2023 <a href="/" className="hover:underline transition-all duration-300">
                        SwastikPathology
                    </a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
