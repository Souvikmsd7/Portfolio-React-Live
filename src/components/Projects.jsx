import React from 'react'
import Example from './Card'
import { motion } from 'framer-motion'
import net from '../Image/Netfliui.png';
import Docs from '../Image/Docs.png';
import land from '../Image/landing.png';
import snake from '../Image/snakerunner.png';

function Projects() {
  return (
    <div data-scroll data-scroll-speed='0.2' data-scroll-section className='w-full flex flex-col gap-11 justify-center items-center bg-white sm:pt-[10%] mt-[-90px]' id='Project'>
      <div className='flex justify-evenly w-full sm:flex-row flex-col'>
        <div>
          <Example name={Docs} />
          <div className=' flex justify-center gap-9 text-[20px] mt-4'>
            <a target="_blank" href="https://github.com/NamanGupta1412/Notes-Making" className='rounded-2xl border-2 border-dashed mb-9 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>GIT</a>
            <a target="_blank" href="https://magical-banoffee-32c8a8.netlify.app" className='rounded-2xl border-2 border-dashed mb-9 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>LIVE</a>
          </div>
        </div>
        <div>
          <Example name={snake} />
          <div className=' flex justify-center gap-9 text-[20px] mt-4'>
            <a target="_blank" href="https://github.com/NamanGupta1412/SnakeRunner" className='rounded-2xl border-2 border-dashed mb-9 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>GIT</a>
            <a target="_blank" href="https://666a97870b6494a1bfe61536--graceful-starship-6e012e.netlify.app/" className='rounded-2xl border-2 border-dashed mb-9 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>LIVE</a>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly w-full sm:flex-row flex-col'>
        <div>
          <Example name={land} />
          <div className=' flex justify-center gap-9 text-[20px] mt-4'>
            <a target="_blank" href="https://github.com/NamanGupta1412/practicing" className='rounded-2xl border-2 border-dashed mb-9 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>GIT</a>
            <a target="_blank" href="https://namangupta1412.github.io/practicing/" className='rounded-2xl border-2 border-dashed mb-9 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>LIVE</a>
          </div>
        </div>
        <div>
          <Example name={net} />
          <div className=' flex justify-center gap-9 text-[20px] mt-4'>
            <a target="_blank" href="https://github.com/NamanGupta1412/NetflixClone-" className='rounded-2xl border-2 border-dashed mb-9 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>GIT</a>
            <a target="_blank" href="https://666a96393bf150a3a3f2b190--cozy-pegasus-40e693.netlify.app/" className='rounded-2xl border-2 border-dashed mb-9 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>LIVE</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects