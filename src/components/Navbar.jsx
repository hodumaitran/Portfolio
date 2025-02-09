import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Toggle } from './Toggle'

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="w-full h-[80px] text-white bg-[#CF8BF3] flex justify-center items-center">
                <div className="container flex justify-between items-center px-4">
                    <h1>TranHDM</h1>
                    <ul className='hidden h-full md:flex md:items-center md:justify-between '>
                        <li className='p-5'><a href="#about">About</a></li>
                        <li className='p-5'><a href="#project">Project</a></li>
                        <li className='p-5'><a href="#contact">Contact</a></li>
                        <Toggle></Toggle>
                    </ul>

                    <div onClick={handleNav} className="block md:hidden">
                        {nav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>

                    <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 p-4' : 'fixed left-[-100%]'}>
                        <h1>TranHDM</h1>
                        <ul className='text-center'>
                            <li className='p-5'><a href="#about">About</a></li>
                            <li className='p-5'><a href="#project">Project</a></li>
                            <li className='p-5 mb-5'><a href="#contact">Contact</a></li>
                            <Toggle></Toggle>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
