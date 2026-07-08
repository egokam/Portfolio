"use client";

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // تم إضافة style لضمان الـ z-index وتفاعل الفأرة
            style={{ zIndex: 1 }}
            className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden'
          >
            <div className='absolute inset-0 opacity-5 -z-10'
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>

            <div className='flex flex-col gap-8 md:gap-16 md:flex-row items-center relative z-10'>
              <div className='flex-1'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='font-serif text-2xl md:text-3xl'
                >
                  Let's create something amazing together
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='text-sm md:text-base mt-2'
                >
                  Ready to bring your visionary project to life? Let's connect to discuss how I can help you achieve your goals.
                </motion.p>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  {/* قمنا بإزالة الـ button واستخدمنا a tag مباشرة ليكون الكود نظيفاً وصحيحاً */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=egokam.business@gmail.com&su=Let's%20Work%20Together"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(17,24,39,0.3)] group cursor-pointer'
                  >
                    <span className='font-semibold'>Contact Me</span>
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};