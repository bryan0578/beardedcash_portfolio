import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin", "latin-ext"]
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default layout