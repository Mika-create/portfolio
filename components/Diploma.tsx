import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Diploma({}: Props) {
  return (
     <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-6 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Diplômes
        </h3>
            <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration:1.2 
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true
            }}
            src='/hat.svg' alt='logotype'
            className='flex-shrink-0 w-66 h-56 object-cover
            md:rounded-lg md:w-95 md:h-44 xl:w-[400px] xl:h-[300px] lg:ml-60'
        />
        <div className='space-y-5 md:px-10 md:mr-36'> 
            <p className='md:text-xl lg:text-2xl font-semibold'>
                2021 / <span className='underline decoration-[#F7AB0A]/50 px-2'>Formation Webdesign</span> à Langueux, AFPA
            </p>
            <p className='md:text-xl lg:text-2xl font-semibold'>
                2013 / <span className='underline decoration-[#F7AB0A]/50 px-2'>BTS Design de produits</span> à Brest, Lycée Vauban
            </p>
            <p className='sm:text:lg md:text-xl lg:text-2xl font-semibold'>
                2009 / <span className='underline decoration-[#F7AB0A]/50 px-2'>STI Arts Appliqués</span> à Rennes, Lycée Bréquigny
            </p>
        </div>
    </motion.div>
  )
}