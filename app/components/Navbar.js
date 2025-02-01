"use client"
import React, { useState } from 'react'
import Swastik from './Swastik'
import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {
    const { isSignedIn, user } = useUser()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='navbar'>
            <nav
                className='fixed flex justify-between items-center p-3 w-[100vw] text-white  bg-[#1f5e96] transition-all duration-200 top-0 left-0 z-50'
            >
                <h1><Swastik /></h1>

                {/* Hamburger/Cross Button */}
                <button
                    className='block md:hidden text-white focus:outline-none transition-transform duration-300 transform'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg
                            className='w-6 h-6 rotate-180 transform duration-300'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    ) : (
                        <svg
                            className='w-6 h-6 rotate-0 transform duration-300'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    )}
                </button>

                {/* Menu */}
                <ul
                    className={`flex flex-col md:pr-4 md:flex-row space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto  bg-[#1f5e96] md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
                        }`}
                >
                    <li className='relative group'>
                        <Link href={'/'} onClick={() => { setIsMenuOpen(false) }}>Home</Link>
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                    </li>
                    <li className='relative group'>
                        <Link href={'/about'} onClick={() => { setIsMenuOpen(false) }}>About</Link>
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                    </li>
                    <li className='relative group'>
                        <Link href={'/contact'} onClick={() => { setIsMenuOpen(false) }}>Contact</Link>
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                    </li>
                    {!isSignedIn ? (
                        <>
                            <li className='relative group'>
                                <Link href={'/sign-up'} onClick={() => setIsMenuOpen(false)}>Login</Link>
                                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                            </li>
                            <li className='relative group'>
                                <Link href={'/sign-in'} onClick={() => { setIsMenuOpen(false) }}>Sign Up</Link>
                                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='relative group'>
                                <Link href={`/${user.firstName} ${user.lastName}/dashboard`} onClick={() => { setIsMenuOpen(false) }}>Dashboard</Link>
                                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                            </li>
                            <li onClick={() => { setIsMenuOpen(false) }}>
                                <UserButton />
                            </li>
                        </>
                    )}
                </ul>
            </nav>

            {/* Push Content Down */}
            <div className="mt-20"></div>
        </div>
    )
}

export default Navbar
