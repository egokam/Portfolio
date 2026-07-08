"use client"; // مهم جداً لأننا نستخدم Framer Motion

import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`
            }}
          ></div>

          {/* حلقات المدار مع تأثير التنفس (Breathing/Pulse) */}
          <motion.div animate={{ scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 flex items-center justify-center -z-20">
            <div className="size-[620px] hero-ring absolute"></div>
            <div className="size-[820px] hero-ring absolute"></div>
            <div className="size-[1020px] hero-ring absolute"></div>
            <div className="size-[1220px] hero-ring absolute"></div>
          </motion.div>

          {/* المدارات والنجوم بحركات مخصصة */}
          <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration={48} shouldSpin spinDuration={48}>
            <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <StarIcon className="size-28 text-emerald-300" />
            </motion.div>
          </HeroOrbit>

          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration={38} shouldSpin spinDuration={38}>
            <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <StarIcon className="size-12 text-emerald-300" />
            </motion.div>
          </HeroOrbit>

          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration={42} shouldSpin spinDuration={42}>
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration={30} shouldSpin spinDuration={30}>
            <motion.div animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, 180, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <SparkleIcon className="size-8 text-emerald-300/20" />
            </motion.div>
          </HeroOrbit>

          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration={34} shouldSpin spinDuration={34}>
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration={36} shouldSpin spinDuration={36}>
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration={46} shouldSpin spinDuration={46}>
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={50} shouldSpin spinDuration={50}>
            <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={32} shouldSpin spinDuration={32}>
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={620} rotation={-5} shouldOrbit orbitDuration={40} shouldSpin spinDuration={40}>
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={memojiImage} className="size-[100px]" alt="person behind laptop" />
            </motion.div>

            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-green-500 size-2.5 rounded-full"
              ></motion.div>
              <div className="text-sm font-medium">Available for new projects</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">I do fullstack web development, creating responsive and user-friendly applications.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4"
          >
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-colors">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-gray-200 transition-colors">
              <span>📭</span>
              <span className="font-semibold">Contact Me</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};