import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Skills from "./Skills";
import Paragraph from './Para';
import Heading from './Heading';
function About() {



  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start 0.25"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])


  return (
    <div data-scroll data-scroll-speed='0.2' data-scroll-section className='w-full pt-[15%] sm:pt-[10%] z-10 bg-white text-black mb-11' id='About'>
      <Heading />
      <Skills />
      <section className="about relative w-full flex justify-center">
        <motion.p
          ref={container}
          style={{ opacity }}
          className="text-justify pt-[5%] mr-[5%] ml-[10%] text-[30px] w-[80%]">
          <Paragraph />
        </motion.p>
      </section>
    </div>
  )
}

export default About