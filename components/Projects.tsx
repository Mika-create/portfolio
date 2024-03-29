import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  return (
     <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projets
        </h3>
        <div  className='w-full absolute top-[30%] bg-[#F7AB0A]/5 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}