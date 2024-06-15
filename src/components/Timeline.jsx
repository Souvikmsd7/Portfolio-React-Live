import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import tenth from "../Image/10th.jpg";
import twelfth from "../Image/12th.jpg";
import intern from "../Image/Intern.jpg";
import Btech from "../Image/B.tech.png";

export const Timeline = () => {


  return (
    <section data-scroll data-scroll-speed='0.2' data-scroll-section className="w-full h-screen flex flex-col items-center justify-center bg-white mt-[-5%]" id="Timeline">
      <div className="w-[80%]">
        <Link
          heading="E-Commerece Developer"
          subheading="Unique Power Technology(EQUAL)"
          imgSrc={intern}
          href="https://drive.google.com/file/d/1365VP2p1xplwGw5pq7tfYDBMYDiy7YZk/view?usp=drive_link"
       target="_blank"
        />
        <Link
          heading="B.Tech(ME)"
          subheading="Jaipur Engineering College and Research Center"
          imgSrc={Btech}
          href="https://drive.google.com/file/d/1fUIi8Es5A28_4yESlTozLP9bePAcnn6U/view?usp=drive_link"
        />
        <Link
          heading="Class-XII"
          subheading="MPS International"
          imgSrc={twelfth}
          href="https://drive.google.com/file/d/13hvxYjFqpvmC5J8gcXCCMCff8kAxlLa6/view?usp=drive_link"
        />
        <Link
          heading="Class-X"
          subheading="MPS International"
          imgSrc={tenth}
          href="https://drive.google.com/file/d/1apiGeOfzFP66N3h8oui1AukOtBvhK1NH/view?usp=drive_link"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-black md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-black md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-black">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >

      </motion.div>
    </motion.a>
  );
};