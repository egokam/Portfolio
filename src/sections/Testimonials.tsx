"use client";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Just me",
    position: "A Full Stack dev",
    text: "I'm the one who codes—not you, not AI. Remember that before saying or even thinking something idiotic.",
    avatar: memojiAvatar1,
  },
  {
    name: "Saul Code man",
    position: "Lawyer",
    text: "let me give you a piece of free legal advice from one professional to another. In the high-stakes world of full-stack development, a single bad deployment can be a felony against the user experience. So, remember the golden rule: Don't drink and code.But hey... if you did Call meee",
    avatar: memojiAvatar2,
  },
  {
    name: "json pinkman",
    position: "Old Partner",
    text: "Yeah boss! Yeah, science! I looked at this and I knew you had a plan all along. But I always wondered... are you in the code business or the money business? Or are you just gonna look at me and say 'Neither' like him? Either way, this setup is pure!",
    avatar: memojiAvatar3,
  },
  {
    name: "Gus Ping",
    position: "Business manager",
    text: "I investigate everyone with whom I do business. What careful man wouldn't? I don't believe fear to be an effective motivator. Never make the same mistake twice. Your product is... acceptable.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            eyebrow="Happy Clients" 
            title="What Clients Say About Me" 
            description="Don't just take my word for it. See what my clients have to say about my work" 
          />
        </motion.div>

  
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-8 -my-8">
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 flex-none pr-8 group"
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card 
                    key={testimonial.name} 
                    className="max-w-xs md:max-w-md p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_rgba(110,231,183,0.15)] cursor-pointer"
                  >
                    <div aria-hidden={index === 1 ? "true" : "false"}>
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 relative overflow-hidden">
                          <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-white/40">{testimonial.position}</div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};