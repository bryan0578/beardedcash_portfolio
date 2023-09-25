"use client"

import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

const navLinks = [
    {
        id: "#about",
        title: "about",
    },
    {
        id: "#projects",
        title: "projects",
    },
    {
        id: "#experience",
        title: "experience",
    },
    {
        id: "#blog",
        title: "blog",
    },
    {
        id: "#contact",
        title: "contact",
    },
]
const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white'>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/">
                <Image src="/BeardLogoOrange-8.svg" width={45} height={45} alt={''}/>
            </Link>
        
            <Image
                src={toggle ? "/close.svg" : "/menu.svg"}
                width={30}
                height={30}
                alt="Hamburger menu"
                className='block md:hidden'
                onClick={() => setToggle(!toggle)}
            />
            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
            {navLinks.map((nav) => (
                <li key={nav.id}
                  className={`${
                    active === nav.title ? "text-gradient_blue-purple" : "text-white-800"
                  } !font-bold body-text capitalize`}
                  onClick={() => {
                    setActive(nav.title);
                  }}
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>

            <div className={`${!toggle ? "hidden" : "flex-start"} bg-black-100 p-6 border-l border-t border-b border-black-400 absolute top-20 right-0 my-2 min-w-[50%] z-20 rounded-tl-lg rounded-bl-lg`}>
                <ul className='flex-start w-full py-4 px-4 flex-col gap-y-10 gap-x-3 md:gap-x-10'>
                    {navLinks.map((nav) => (
                        <li key={nav.id}
                            className={`${active === nav.title ? "text-gradient_blue-purple" : "text-white-800"} !font-bold body-text capitalize`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(nav.title);
                            }}
                        >
                            <Link href={`#${nav.id}`}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar