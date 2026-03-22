"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Icon = dynamic(() => import("@iconify/react").then((mod) => mod.Icon), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3,
      });

      gsap.to(".storage-mockup", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-44 pb-20 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden"
    >
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-6"
          >
            <Icon icon="lucide:sparkles" className="w-4 h-4" />
            New AI Engine 2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Clean your storage
            <br />
            effortlessly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Smart AI that removes duplicates, compresses files, and frees up
            space — automatically. Meet your phone&apos;s new best friend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 text-lg font-bold rounded-full flex items-center justify-center gap-3 shadow-lg"
            >
              Start Cleaning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 text-lg font-bold rounded-full flex items-center justify-center gap-3"
            >
              See How It Works
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
          style={{ minHeight: "400px" }}
        >
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="floating-element"
            style={{ top: "10%", left: "5%" }}
          >
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Icon icon="lucide:image" className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm">Images Cleaner</div>
              <div className="text-gray-500 text-xs">2.4 GB found</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="floating-element"
            style={{ top: "40%", right: "5%" }}
          >
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Icon icon="lucide:video" className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm">Video Cleaner</div>
              <div className="text-gray-500 text-xs">5.1 GB found</div>
            </div>
          </motion.div>

          {/* Main Bee Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="relative mx-auto"
            style={{ maxWidth: "300px" }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="https://storage.googleapis.com/banani-generated-images/generated-images/48ab1ee7-0e8d-43f3-a4cc-62c4b5e52dd0.jpg"
                alt="Tired Bee Mascot"
                width={300}
                height={300}
                className="rounded-full shadow-lg mx-auto"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Storage Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          >
            <div className="storage-mockup">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-lg">Storage Almost Full</div>
                <div className="text-red-700 font-bold">95%</div>
              </div>
              <div className="text-gray-600 text-sm mb-4 text-left">
                BeeClean can free up 14.5 GB right now.
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden flex">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                  className="bg-red-400"
                />
                <div className="bg-yellow-400" style={{ width: "15%" }}></div>
              </div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full mt-6 py-3 text-base"
              >
                Clean 14.5 GB
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
