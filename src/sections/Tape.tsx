"use client";

import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Scalable",
  "User Friendly", // تم تصحيح الكلمة
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Responsive",
  "Luxurious", // تم تصحيح الكلمة
];

export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          {/* حاوية الحركة اللانهائية */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-none gap-4 py-3 pr-4"
          >
            {/* تكرار المصفوفة مرتين لضمان استمرار الحركة بدون انقطاع */}
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div 
                    key={word} 
                    className='inline-flex gap-4 items-center'
                    // خدعة الـ SEO: إخفاء النسخة المكررة عن محركات البحث وقارئات الشاشة
                    aria-hidden={index === 1 ? "true" : "false"}
                  >
                    <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                    <StarIcon className='size-6 text-gray-900 -rotate-12' />
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};