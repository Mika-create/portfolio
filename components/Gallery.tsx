import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Gallery({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Galerie
        </h3>
        
            <Link href='/Galery' passHref className='absolute z-20 bottom-[85px]'>
                <motion.img
                    className='flex-shrink-0 object-cover mx-auto w-[300px] h-[500px]'
                    src='../digital/floating.webp'
                    alt='floating sphere'
                    animate={{ scale:1}}
                    whileHover={{ scale:1.1}} />
            </Link>
        
        <div  className='w-2/4 absolute top-[30%] bg-[#F7AB0A]/5 h-[400px]'/>
    </div>
  )
}

export default Gallery