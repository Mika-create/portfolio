import React from 'react'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCricle from './BackgroundCricle'
import Image from 'next/image';
import Link from 'next/link';


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Salut, mon nom est Mikaël Moreau',
            'Qui aime le café',
            'Et bien plus les arts',
            'Et le codage',
        ],
        loop: true,
        delaySpeed: 2000, 
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCricle />
        <Image
        src='/LogoM-M.svg' alt='logotype' width={150} height={150}
        className='relative mx-auto objectcover'/>
        <div className='pt5 z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Web Designer</h2>
                <h1 className='text-3xl lg:text-4xl font-semibold px-10'>  
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
            </h1> 
        
            <div className='py-5'>
                <Link href='À Propos'>
                <button className='heroButton'>À propos</button>
                </Link>
                <Link href='experience'>
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href='competences'>
                <button className='heroButton'>Compétences</button>
                </Link>
                <Link href='gallerie'>
                <button className='heroButton'>Gallerie</button>
                </Link>
            </div>
        </div>
    </div>
  )
}