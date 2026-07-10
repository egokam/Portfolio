"use client";

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { motion } from 'framer-motion';


const footerLinks = [
  {
    title: 'Instagram',
    href: 'https://instagram.com/w.zd7', 
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/',
  },
  {
    title: 'Github',
    href: 'https://github.com/egokam',
  },
  {
    title: 'YouTube',
    href: 'https://youtube.com/@ego_code',
  },
];

export const Footer = () => {
  return (
   
    <footer className='relative overflow-x-clip z-0'>
      
     
      <motion.div 
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'
      ></motion.div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8"
        >
          <div className="text-white/40">&copy; 2026. All Rights Reserved.</div>
          
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                href={link.href}
                key={link.title}
           
                target="_blank"
                rel="noopener noreferrer"
          
                className="inline-flex items-center gap-1.5 group transition-colors duration-300 hover:text-emerald-300 cursor-pointer"
              >
                <span className="font-semibold relative transition-transform duration-300 group-hover:-translate-y-0.5 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-300 after:transition-all after:duration-300">
                  {link.title}
                </span>
                <ArrowUpRightIcon className='size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};