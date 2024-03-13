import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import type {LightGallery} from 'lightgallery/lightgallery'
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';




export default function Galery() {
   const lightboxRef = useRef<LightGallery | null>(null);


  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
       <div className='relative flex flex-col space-y-8 items-center justify-center
            text-center'>
            <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Portfolio
            </h3>
                <div className='relative top-24 grid grid-cols-3 gap-5'>
                    <motion.img
                    className='flex-shrink-0 object-cover mx-auto w-[300px] h-[500px]'
                    src='../digital/floating.webp'
                    alt='floating sphere'
                    animate={{ scale:1}}
                    whileHover={{ scale:1.1}}
                    onClick={() => {
                        lightboxRef.current?.openGallery()
                    }} />
                    <motion.img
                     className='flex-shrink-0 object-cover mx-auto w-[300px] h-[500px]'
                    src='../digital/iceberg.webp'
                    alt='floating sphere'
                    animate={{ scale:1}}
                    whileHover={{ scale:1.1}} 
                     onClick={() => {
                        lightboxRef.current?.openGallery()
                    }}/>
                    <motion.img
                    className='flex-shrink-0 object-cover mx-auto w-[300px] h-[500px]'
                    src='../digital/MirrorEffectAndernos.webp'
                    alt='floating sphere'
                    animate={{ scale:1}}
                    whileHover={{ scale:1.1}} 
                     onClick={() => {
                        lightboxRef.current?.openGallery()
                    }}/>
                     <motion.img
                    className='flex-shrink-0 object-cover mx-auto w-[300px] h-[500px]'
                    src='../digital/sun.webp'
                    alt='floating sphere'
                    animate={{ scale:1}}
                    whileHover={{ scale:1.1}}
                    onClick={() => {
                        lightboxRef.current?.openGallery()
                    }} />
                    <motion.img
                     className='flex-shrink-0 object-cover mx-auto w-[300px] h-[500px]'
                    src='../digital/profilD_E.webp'
                    alt='floating sphere'
                    animate={{ scale:1}}
                    whileHover={{ scale:1.1}} 
                     onClick={() => {
                        lightboxRef.current?.openGallery()
                    }}/>
                    <motion.img
                    className='flex-shrink-0 object-cover mx-auto w-[300px] h-[500px]'
                    src='../digital/tac.webp'
                    alt='floating sphere'
                    animate={{ scale:1}}
                    whileHover={{ scale:1.1}} 
                     onClick={() => {
                        lightboxRef.current?.openGallery()
                    }}/>
                </div>
                
                <LightGalleryComponent
                onInit={(ref) => {
                    if (ref) {
                        lightboxRef.current = ref.instance;
                    }
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={[
                    {
                        src: '../digital/floating.webp',
                        thumb: '../digital/floating.webp'
                    },
                    {
                        src: '../digital/iceberg.webp',
                        thumb: '../digital/iceberg.webp'
                    },
                    {
                        src: '../digital/MirrorEffectAndernos.webp',
                        thumb: '../digital/MirrorEffectAndernos.webp'
                    },
                    {
                        src: '../digital/sun.webp',
                        thumb: '../digital/sun.webp'
                    },
                    {
                        src: '../digital/profilD_E.webp',
                        thumb: '../digital/profilD_E.webp'
                    },
                    {
                        src: '../digital/tac.webp',
                        thumb: '../digital/tac.webp'
                    },
                ]} />                   
       </div> 
       
    </div>
  )
}