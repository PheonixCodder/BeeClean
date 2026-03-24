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
      className="pt-44 pb-20 bg-gradient-to-br from-white via-yellow-50 to-blue-50 relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 opacity-10 rounded-full blur-3xl"
        />
      </div>

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
            New AI Engine
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
            space automatically. Meet your phone&apos;s new best friend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 216, 77, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 text-lg font-bold rounded-full flex items-center justify-center gap-3 shadow-lg transition-shadow"
            >
              <Icon icon="lucide:sparkles" className="w-5 h-5" />
              Start Cleaning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "var(--card)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 text-lg font-bold rounded-full flex items-center justify-center gap-3 border-2 shadow-sm hover:shadow-md transition-all"
            >
              <Icon icon="lucide:play" className="w-5 h-5" />
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
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="floating-element"
            style={{ top: "10%", left: "5%" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shadow-md border border-blue-100"
            >
              <Icon icon="lucide:image" className="w-7 h-7 text-blue-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-left"
            >
              <div className="font-bold text-sm text-gray-800">Images Cleaner</div>
              <div className="text-gray-500 text-xs">2.4 GB found</div>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="floating-element"
            style={{ top: "40%", right: "5%" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center shadow-md border border-purple-100"
            >
              <Icon icon="lucide:video" className="w-7 h-7 text-purple-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-left"
            >
              <div className="font-bold text-sm text-gray-800">Video Cleaner</div>
              <div className="text-gray-500 text-xs">5.1 GB found</div>
            </motion.div>
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
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                    "0 30px 60px -15px rgba(255, 200, 0, 0.3)",
                    "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="rounded-full"
              >
                <Image
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/48ab1ee7-0e8d-43f3-a4cc-62c4b5e52dd0.jpg"
                  alt="Tired Bee Mascot"
                  width={300}
                  height={300}
                  className="rounded-full shadow-2xl mx-auto"
                  priority
                />
              </motion.div>
            </motion.div>
            {/* Glowing ring effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 blur-2xl -z-10"
            />
          </motion.div>

          {/* Storage Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          >
            <motion.div
              transition={{ type: "spring", stiffness: 300 }}
              className="storage-mockup"
            >
              <div className="flex justify-between items-center mb-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="font-bold text-lg text-gray-900"
                >
                  Storage Almost Full
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.7, type: "spring" }}
                  className="text-red-600 font-bold text-lg px-3 py-1 bg-red-50 rounded-full"
                >
                  95%
                </motion.div>
              </div>
              <div className="text-gray-600 text-sm mb-4 text-left">
                BeeClean can free up{" "}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 }}
                  className="font-bold text-green-600"
                >
                  14.5 GB
                </motion.span>{" "}
                right now.
              </div>
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full overflow-hidden flex shadow-inner">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                  className="bg-gradient-to-r from-red-400 to-red-300 shadow-sm"
                />
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-300"
                />
              </div>
              <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                <span>Used: 85%</span>
                <span>Free: 15%</span>
              </div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -5px rgba(255, 216, 77, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full mt-6 py-4 text-base font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon icon="lucide:sparkles" className="w-5 h-5" />
                  Clean 14.5 GB Now
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
