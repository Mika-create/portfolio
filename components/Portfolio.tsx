import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import floating from '../digital/floating.webp'
import iceberg from '../digital/iceberg.webp'
import MirrorEffectAndernos from '../digital/MirrorEffectAndernos.webp'
import PolarBear from '../digital/PolarBear.webp'
import ProfilD_E from '../digital/profilD_E.webp'
import sun from '../digital/sun.webp'
import tac from '../digital/tac.webp'

import type {LightGallery} from 'lightgallery/lightgallery'
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';



const images = [floating, iceberg, MirrorEffectAndernos, PolarBear, ProfilD_E, sun, tac]

export default function Portfolio() {
    const lightboxRef = useRef<LightGallery | null>(null);
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
       <div className='h-screen flex flex-col space-y-8 items-center justify-center
            text-center overflow-hidden'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Portfolio
            </h3>
        </div>    
        <div className='grid grid-cols-3 space-x-5'>
            {images.map(image => (
                <motion.img 
                key={image.src}
                src={image.src}
                alt='placeholder'
                className='my-4'
                placeholder='blur'/>
                ))}
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
                        src: '../public/digital/floating.webp',
                        thumb: '../public/digital/floating.webp'
                    },
                    {
                        src: '../digital/iceberg.webp',
                        thumb: '../digital/iceberg.webp'
                    },
                    {
                        src: '../digital/MirrorEffectAndernos.webp',
                        thumb: '../digital/MirrorEffectAndernos.webp'
                    }
                ]} />                  
    </div>
  )
}