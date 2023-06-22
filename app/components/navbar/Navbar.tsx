'use client'


import Link from "next/link"
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation";
import DarkmodeIcon from "./DarkmodeIcon";
import Logo from "./Logo";
import { Inter } from "next/font/google";



const inter = Inter({weight: ['500'], subsets: ['latin'] })

const links = [
  { href: '/', label: 'Home'},
  { href: '/about', label: 'About'},
  { href: '/projects', label: 'Projects'},
  { href: '/contact', label: 'Contact'},
]

const Navbar = () => {
  const path = usePathname();
  
  return (
    <motion.header className= {`${inter.className} z-10`}
      initial={{ y: '50%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{duration: 1}}
      exit={{ opacity: 0 }}>
      <div className="flex items-center  text-[15px] pb-20 justify-between">
        <Logo/>
        <nav className = 'hidden sm:flex items-center'>
          <ul className="[&_li]:ml-4 ml-12 flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="relative" href={link.href}>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className = 'group hover:text-pastel-blue-dark-100 transition-colors duration-500'
                >
                  {
                  ((link.href === path) || (path.includes('/projects') && link.href === '/projects')) && (
                    <motion.span
                      layoutId="underline"
                      className="group-hover:bg-pastel-blue-dark-100 transition-colors duration-500 absolute left-0 top-full block mt-1 h-[1px] w-full bg-pastel-brown-dark"
                    />
                  )}
                  {link.label}
                 </motion.div> 
                </Link>
              </li>
            ))}
          </ul>
          <div className = 'px-5'>
            <DarkmodeIcon/>
          </div>
          
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar