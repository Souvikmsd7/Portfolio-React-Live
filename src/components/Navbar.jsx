import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {Link,} from 'react-scroll';

export const Nav = () => {
  return (
    <div className="fixed w-full flex items-center justify-between px-9 bg-transparent z-[999]">
    <div className="pt-5 uppercase text-base">
      Souvik
    </div>
    <div className="pt-5">
      <SlideTabs />
    </div>
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full bg-transparent p-1 "
    >
      <Tab setPosition={setPosition}>
      {/* <Link 
      to="Home" 
      spy={true} 
      smooth={true} 
      offset={-700} 
      duration={500} >Home</Link> */}
      </Tab>
      <Tab setPosition={setPosition}>
      <Link 
      to="About" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} >About</Link>
      </Tab>
      <Tab setPosition={setPosition}>
      <Link 
      to="Project" 
      spy={true} 
      smooth={true} 
      offset={-200} 
      duration={500} >Project</Link>
      </Tab>
      <Tab setPosition={setPosition}>
      <Link 
      to="Timeline" 
      spy={true} 
      smooth={true} 
      offset={-250} 
      duration={500} >Journey</Link>
      </Tab>
      <Tab setPosition={setPosition}>
      <Link 
      to="Contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >Contact</Link>
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base hover:text-black"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12 "
    />
  );
};