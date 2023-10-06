import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Poppins } from 'next/font/google';
import { getNav } from '@/sanity/actions';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin", "latin-ext"]
});




const layout = async ({ children }: { children: React.ReactNode }) => {
  const nav = await getNav();
  return (
    <>
        <Navbar image={nav.image} navLinks={nav.navLinks} />
        {children}
        <Footer />
    </>
  )
}

export default layout