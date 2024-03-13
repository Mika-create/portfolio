import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y:-100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover
            object-center'
            src='/logoM-M.svg' 
            alt='entreprise'
        />
        <div className='px-0 sm:px-10'>
            <h4 className='text-4l font-light'>Employé libre-service</h4>
            <p className='font-bold text-2xl mt-1'>Proman</p>
            <p className='uppercase py-5 text-gray-300'>
                Année
            </p>
            <ul className='list-disc space-y-4 ml-5 text-base'>
                <li>Transports des produits en rayon</li>
                <li>Mise en rayon</li>
                <li>Réalisation du facing</li>
                <li>Contrôle des dates de conservation des produits</li>
            </ul>
        </div>
    </article>
  )
}