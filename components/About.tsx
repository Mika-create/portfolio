import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-6 uppercase tracking-[20px] text-gray-500 text-2xl'>
            À propos
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
            src='/profilimg.png' alt='logotype'
            className='-mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[550px] lg:ml-60'
        />
        <div className='space-y-5 md:px-10 md:mr-36'> 
            <h4 className='md:text-2xl font-semibold'>
                Voici un petit  
                 <span className='underline decoration-[#F7AB0A]/50 px-2'>historique</span>
            </h4>
            <p className='text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veniam a atque modi doloremque iure quo laudantium enim eos
                ipsam numquam inventore eum vel ad repellendus adipisci,
                tenetur, deserunt facilis repellat.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                Veniam a atque modi doloremque iure quo laudantium enim eos
                ipsam numquam inventore eum vel ad repellendus adipisci,
                tenetur, deserunt facilis repellat.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veniam a atque modi doloremque iure quo laudantium enim eos
                ipsam numquam inventore eum vel ad repellendus adipisci,
                tenetur, deserunt facilis repellat.
                
                
            </p>
        </div>
    </motion.div>
  )
}