'use client'

import { motion } from 'framer-motion'

const HomeClient = () => {

    const line1 = 'HI.'
    const line2 = 'IM THOMAS BOOTH.'

    const sentence = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    }
    const letter = {
        hidden: { opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0
        }

    }
  return (
    //     <motion.article
    //     initial={{ x: '50%', opacity: 0 }}
    //     animate={{ x: '0%', opacity: 1 }}
    //     transition={{duration: 1, staggerChildren: 0.2}}
    //     exit={{ opacity: 0 }}>
    //     <motion.h1 className = 'font-bold text-5xl'>HI.</motion.h1>
    //     <motion.h2 className = 'font-bold text-3xl'>IM THOMAS BOOTH.</motion.h2>
    //   </motion.article>
    <div className = 'flex flex-col items-center '>
        <motion.article
            initial={{ x: '50%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{type: 'spring', when: 'beforeChildren', duration: 0.5, staggerChildren: 0.2}}>
            <motion.h3
                className = 'font-bold'
                variants = {sentence}
                initial = 'hidden'
                animate = 'visible'>
                {line1.split('').map((char, i) => {
                    return (
                        <motion.span 
                            className = 'text-5xl'
                            key = {char + i}
                            variants = {letter}
                        >
                            {char}
                        </motion.span>
                    )
                })}
                <br />
                {line2.split('').map((char, i) => {
                    return (
                        <motion.span 
                            className = 'text-3xl'
                            key = {char + i}
                            variants = {letter}
                        >
                            {char}
                        </motion.span>
                    )
                })}
            </motion.h3>
        </motion.article>
    </div>
  )
}

export default HomeClient