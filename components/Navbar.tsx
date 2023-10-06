"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

import { FC, useEffect, useState } from 'react'

// const navLinks = [
//     {
//         id: "",
//         title: "home",
//     },
//     {
//         id: "#about",
//         title: "about",
//     },
//     {
//         id: "#projects",
//         title: "projects",
//     },
//     {
//         id: "blog",
//         title: "blog",
//     },
//     {
//         id: "#contact",
//         title: "contact",
//     },
// ]
interface NavLink {
  label: string;
  url: string;
}

interface NavBarProps {
  image: string;
  navLinks: NavLink[];
}


const Navbar: FC<NavBarProps> = ({ image, navLinks }) => {
    const [active, setActive] = useState("home");
    const [toggle, setToggle] = useState(false);
    
  return (
    <nav className={`flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white `}>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/" className="flex-center" onClick={() => {
                    setActive('home');
                  }}>
               <Image src={image} width={45} height={45} alt={''}/>
               <h1 className='hidden lg:block pl-4 font-semibold'>Beardedcash Designer | Developer</h1>
            </Link>
            <Image
                src={toggle ? "/close.svg" : "/menu.svg"}
                width={30}
                height={30}
                alt="Hamburger menu"
                className='block md:hidden'
                onClick={() => {
                    setToggle(!toggle) 
                    window.scrollTo(0, 0);
                }}
            />
            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
            {navLinks.map((link, index) => (
                <li key={index}
                  className={`${active === link.label ? "text-gradient_primary" : "text-white-800"
                  } !font-bold body-text capitalize hover:text-primary transition ease-in`}
                  onClick={() => {
                    setActive(link.label);
                  }}
                  
                >
                  <Link className='links' href={`/${link.url}`} scroll={true}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <div className={`${!toggle ? "hidden" : "flex-start"} bg-black-100 p-6 border-l border-t border-b border-black-400 absolute top-20 right-0 my-2 min-w-[50%] z-20 rounded-tl-lg rounded-bl-lg`}>
                <ul className='flex-start w-full py-4 px-4 flex-col gap-y-10 gap-x-3 md:gap-x-10'>
                    {navLinks.map((link, index) => (
                        <li key={index}
                            className={`${active === link.label ? "text-gradient_primary" : "text-white-800"} !font-bold body-text capitalize hover:text-primary transition ease-in`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(link.label);
                            }}
                        >
                            <Link href={`/${link.url}`} scroll={true}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar