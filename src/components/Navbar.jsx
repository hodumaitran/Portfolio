import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Toggle } from './Toggle'
import { Link } from 'react-scroll'

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="w-full h-[80px] text-white bg-[#CF8BF3] flex justify-center items-center z-10">
                <div className="w-[90%] flex justify-between items-center px-4">
                    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
                        Portfolio
                    </h1>
                    <ul className='hidden h-full md:flex md:items-center md:justify-between '>
                        <li className="p-5 cursor-pointer">
                            <Link to="about" smooth={true} duration={500}>Giới thiệu</Link>
                        </li>
                        <li className="p-5 cursor-pointer">
                            <Link to="skill" smooth={true} duration={500}>Kỹ năng</Link>
                        </li>
                        <li className="p-5 cursor-pointer">
                            <Link to="project" smooth={true} duration={500}>Dự án</Link>
                        </li>
                        <li className="p-5 cursor-pointer">
                            <Link to="timeline" smooth={true} duration={500}>Hành trình</Link>
                        </li>
                        <li className="p-5 cursor-pointer">
                            <Link to="contact" smooth={true} duration={500}>Liên hệ</Link>
                        </li>
                        <Toggle />
                    </ul>

                    <div onClick={handleNav} className="block md:hidden">
                        {nav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>

                    <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 p-4' : 'fixed left-[-100%]'}>
                        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
                            Portfolio
                        </h1>
                        <ul className='text-center'>
                            <ul className='h-full'>
                                <li className="p-5 cursor-pointer">
                                    <Link to="about" smooth={true} duration={500}>Giới thiệu</Link>
                                </li>
                                <li className="p-5 cursor-pointer">
                                    <Link to="skill" smooth={true} duration={500}>Kỹ năng</Link>
                                </li>
                                <li className="p-5 cursor-pointer">
                                    <Link to="project" smooth={true} duration={500}>Dự án</Link>
                                </li>
                                <li className="p-5 cursor-pointer">
                                    <Link to="timeline" smooth={true} duration={500}>Hành trình</Link>
                                </li>
                                <li className="p-5 cursor-pointer">
                                    <Link to="contact" smooth={true} duration={500}>Liên hệ</Link>
                                </li>
                                <Toggle />
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
