import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

 function Paragraph() {


    const paragraph = "Proficient frontend developer with strong skills in React.js, HTML, CSS, Tailwind CSS, and JavaScript, and experience in API integration. Familiar with backend technologies like Laravel, jQuery, SQL, and Bootstrap. Committed to delivering scalable, efficient solutions that drive business growth and user satisfaction."

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <p 
      ref={container}         
      className="flex sm:text-[40px] text-[15px] leading-[1] text-black flex-wrap sm:pb-0 pb-32" 
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
    </p>
  )
}

const Word = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return <span className="relative mr-[12px] mt-[12px]">
    <span className="absolute opacity-[20%]">{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </span>
}
export default Paragraph;