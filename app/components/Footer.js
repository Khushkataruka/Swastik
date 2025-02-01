import React from 'react';
import Swastik from './Swastik';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="rounded-lg shadow bg-[#1f5e96] m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Swastik />
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <Link href="/about" className="hover:underline me-4 md:me-6">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline me-4 md:me-6">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center">
                    © 2023 <Link href="/" className="hover:underline transition-all duration-300">
                        SwastikPathology
                    </Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
