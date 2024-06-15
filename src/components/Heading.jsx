import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { twMerge } from "tailwind-merge";

 const Heading = () => {
  return (
    <section className="flex h-72 flex-col items-center bg-white justify-center gap-12 px-4 pb-24 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-white text-neutral-900">
            Skills 
          </LogoItem>,
          <LogoItem key={2} className="bg-white text-neutral-900">
            About
          </LogoItem>,
          <LogoItem key={3} className="bg-white text-[2.5rem] text-neutral-900">
            Projects
          </LogoItem>,
          <LogoItem key={4} className="bg-white text-black">
            Journey
          </LogoItem>,
          <LogoItem key={5} className="bg-white text-neutral-900 px-5">
           Souvik Saha
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 1500;
const TRANSITION_DURATION_IN_SECS = 1;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-5xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Heading