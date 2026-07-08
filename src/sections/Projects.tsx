"use client";

import Image from 'next/image';
import cafeqr from "@/assets/images/cafeqr.png";
import portfolio from "@/assets/images/portfolio.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from "@/components/Card";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    company: "No Company",
    year: "2026",
    title: "QR system for your cafe",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Improved site speed " },
      { title: "qr scan full system" },
    ],
    link: "https://cafeqr.egokam.site",
    image: cafeqr,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "CEO boosted react portfolio" },
      { title: "high-end animations" },
      { title: "all devices well designed" },
    ],
    link: "https://portfolio.egokam.site",
    image: portfolio,
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            eyebrow='Real-World Results' 
            title='Featured Projects' 
            description='See how our projects have delivered efficient solutions for several problems.' 
          />
        </motion.div>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 group">
                <div className="absolute inset-0 -z-10 opacity-5" style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}></div>
                
                {/* الهيكل الأصلي معزول ومحمي تماماً */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    
                    {/* تحريك النص التمهيدي */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                    >
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </motion.div>

                    {/* تحريك العنوان الرئيسي */}
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl"
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* حركة انسيابية للخط الفاصل */}
                    <motion.hr 
                      initial={{ scaleX: 0, transformOrigin: "left" }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="border-t-2 border-white/5 mt-4 md:mt-5" 
                    />
                    
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, i) => (
                        // تحريك متسلسل للنقاط بناءً على الـ index
                        <motion.li 
                          key={result.title} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="size-5 md:size-6 text-emerald-300/60" />
                          <span>{result.title}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* تحريك الزر */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 transition-all duration-300 hover:bg-emerald-300 hover:scale-105 group/button">
                          <span>View live site</span>
                          <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
                        </button>
                      </a>
                    </motion.div>
                  </div>
                  
                  {/* حاوية الصورة - دخول فخم من الأسفل دون تغيير أبعاد Tailwind الأصلية */}
                  <motion.div 
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    className="relative"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:-rotate-2" 
                    />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};