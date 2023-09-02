'use client'


import Link from "next/link"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { usePathname } from "next/navigation";
import DarkmodeIcon from "./DarkmodeIcon";
import Logo from "./Logo";
import { Inter } from "next/font/google";
import { useGlobalContext } from "@/app/Providers/GlobalProvider";
import CircleToggle from "./CircleToggle";
import { useState } from "react";



const inter = Inter({weight: ['500'], subsets: ['latin'] })

const links = [
  { href: '/', label: 'Home'},
  { href: '/about', label: 'About'},
  { href: '/projects', label: 'Projects'},
  { href: '/contact', label: 'Contact'},
]

const Navbar = () => {
  const path = usePathname();

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  })
  const [hidden, setHidden] = useState(false);
  const { loading, textEnter, textLeave } = useGlobalContext()

  return (
    <>
      { !loading 
      ? (<motion.header className= {`${inter.className} sticky top-0 pt-20 z-10`}
          initial = {'hidden'}
          animate={hidden ? 'hidden' : 'visible'}
          variants = {{
            visible: {y: 0},
            hidden: {y: '-100%'}
          }}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          exit={{ opacity: 0 }}>
          <div className="flex items-center text-[16px] pb-20 justify-between">
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
                      onMouseEnter = {textEnter} onMouseLeave = {textLeave} 
                    >
                      {
                      ((link.href === path) || (path.includes('/projects') && link.href === '/projects')) && (
                        <motion.span
                          layoutId="underline"
                          className="group-hover:bg-pastel-blue-dark-100 transition-colors duration-500 absolute left-0 top-full block mt-1 h-[1px] rounded-full w-full bg-pastel-brown-dark"
                        />
                      )}
                      {link.label}
                    </motion.div> 
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <div className = 'px-5'>
                <DarkmodeIcon/>
              </div> */}
              <div className = 'pl-5'>
                <CircleToggle/>
              </div>
            </nav>
          </div>
        </motion.header>
      )
    : <div>
      </div>}
    </>)
}

export default Navbar