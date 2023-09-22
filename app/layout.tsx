import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bryan Cash Designer|Developer',
  description: 'Explore a captivating showcase of meticulously crafted web designs and innovative web development projects on my portfolio website. With a passion for cutting-edge technology and a keen eye for aesthetics, I bring your digital dreams to life. Browse my diverse range of responsive websites, e-commerce solutions, and interactive web applications. Discover how I can elevate your online presence today!',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/BGkVHpN/Beard-Logo-Orange-8.png',
    "twitter:card": "summary_large_image",
    "twitter:site": "@beardedcash",
    "og:url": "cashbryan.com",
    "og:image": 'https://i.ibb.co/BGkVHpN/Beard-Logo-Orange-8.png',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}
