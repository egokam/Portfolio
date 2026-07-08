"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Map, Overlay } from "pigeon-maps";

const MY_LATITUDE = 30.40401;
const MY_LONGITUDE = -9.55055;

const toolboxItems = [
  { title: 'JavaScript', iconType: JavaScriptIcon },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CSSIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'Github', iconType: GithubIcon },
  { title: 'Chrome', iconType: ChromeIcon },
];

const hobbies = [
  { title: 'TV Series', emoji: '🎞️', left: '5%', top: '5%' },
  { title: 'Night walks', emoji: '🚶', left: '50%', top: '5%' },
  { title: 'Painting', emoji: '🎨', left: '10%', top: '35%' },
  { title: 'Football', emoji: '⚽', left: '40%', top: '40%' },
  { title: 'Music', emoji: '🎵', left: '70%', top: '45%' },
  { title: 'Gaming', emoji: '🎮', left: '5%', top: '65%' },
  { title: 'Reading', emoji: '📖', left: '45%', top: '70%' },
];

const mapProvider = (x: number, y: number, z: number) => {
  return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
};

export const AboutSection = () => {
  const dragConstraintRef = useRef(null);
  
  const [center, setCenter] = useState<[number, number]>([MY_LATITUDE, MY_LONGITUDE]);
  const [zoom, setZoom] = useState(13);

  const handleBoundsChanged = ({ center, zoom, bounds }: any) => {
    setZoom(zoom);

    const latHalfSpan = Math.abs(bounds.ne[0] - bounds.sw[0]) / 2;
    const lngHalfSpan = Math.abs(bounds.ne[1] - bounds.sw[1]) / 2;

    const maxLatDeviation = latHalfSpan * 0.35;
    const maxLngDeviation = lngHalfSpan * 0.35;

    const minLat = MY_LATITUDE - maxLatDeviation;
    const maxLat = MY_LATITUDE + maxLatDeviation;
    const minLng = MY_LONGITUDE - maxLngDeviation;
    const maxLng = MY_LONGITUDE + maxLngDeviation;

    const clampedLat = Math.max(minLat, Math.min(maxLat, center[0]));
    const clampedLng = Math.max(minLng, Math.min(maxLng, center[1]));

    setCenter([clampedLat, clampedLng]);
  };

  return (
    <section id="about">
      <div className="pb-20 lg:py-28 overflow-x-clip">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="About Me"
              title="A Glimpse Into My World"
              description="Learn More About Who I Am, What I Do, and What Inspires Me"
            />
          </motion.div>

          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-2 lg:col-span-1"
              >
                <Card className="h-[320px]">
                  <CardHeader title="My Reads" description="Explore the books shaping my interests." />
                  <motion.div
                    whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-40 mx-auto mt-2 md:mt-0 cursor-pointer"
                  >
                    <Image src={bookImage} alt="Book Cover" className="drop-shadow-2xl" />
                  </motion.div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-3 lg:col-span-2"
              >
                <Card className="h-[320px]">
                  <CardHeader title="My Toolbox" description="Explore the technologies and tools used to craft my exceptional digital works." />
                  <ToolboxItems items={toolboxItems} />
                  <ToolboxItems
                    items={toolboxItems}
                    className="mt-6"
                    itemsWrapperClassName="-translate-x-1/2"
                  />
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-3 lg:col-span-3"
              >
                <Card className="h-[320px] p-0 flex flex-col">
                  <CardHeader title="Beyond the code" description="Explore my interests and hobbies beyond the digital realm. Feel free to drag them!" className="px-6 py-6" />
                  <div className="relative flex-1 overflow-hidden" ref={dragConstraintRef}>
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={hobby.title}
                        drag
                        dragConstraints={dragConstraintRef}
                        whileHover={{ scale: 1.1, cursor: "grab" }}
                        whileDrag={{ scale: 1.2, cursor: "grabbing", zIndex: 50 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + (index * 0.1), type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute shadow-lg"
                        style={{
                          left: hobby.left,
                          top: hobby.top,
                        }}
                      >
                        <span className="font-medium text-gray-950 pointer-events-none">{hobby.title}</span>
                        <span className="pointer-events-none">{hobby.emoji}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-2 lg:col-span-2"
              >
                <Card className="h-[320px] p-0 relative overflow-hidden cursor-grab active:cursor-grabbing">
                  <style>{`
                    .pigeon-tiles {
                      filter: invert(100%) hue-rotate(180deg) contrast(125%) grayscale(20%);
                      opacity: 0.8;
                    }
                    .pigeon-attribution {
                      display: none !important;
                    }
                  `}</style>

                  <Map
                    height={320}
                    center={center}
                    zoom={zoom}
                    onBoundsChanged={handleBoundsChanged}
                    minZoom={11}
                    maxZoom={16}
                    provider={mapProvider}
                  >
                    <Overlay anchor={[MY_LATITUDE, MY_LONGITUDE]} offset={[40, 40]}>
                      <div className="size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                        <motion.div
                          animate={{ scale: [1, 2, 2.5], opacity: [0.8, 0.3, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                          className="absolute inset-0 rounded-full bg-emerald-400 -z-10"
                        />
                        <Image src={smileMemoji} alt="smiling emoji" className="size-20 pointer-events-none" />
                      </div>
                    </Overlay>
                  </Map>
                </Card>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};