"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const Icon = dynamic(() => import("@iconify/react").then((mod) => mod.Icon), {
  ssr: false,
});

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-6">
        {/* Feature 1: Duplicate Detection */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 gap-20 items-center mb-20"
        >
          <motion.div variants={slideInLeft}>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold mb-4">
              <Icon icon="lucide:copy" className="w-4 h-4" />
              Duplicate Detection
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Never look at the same photo twice.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our smart AI scans your entire gallery to find exact and similar
              duplicates. Keep the best shot, automatically remove the rest,
              and reclaim gigabytes of space in seconds.
            </p>
          </motion.div>
          <motion.div variants={slideInRight} className="relative">
            <div className="bg-blue-100 rounded-2xl p-10">
              <div className="bg-white rounded-2xl shadow-lg max-w-sm mx-auto border-8 border-gray-900">
                <div className="bg-gray-50 rounded-xl h-[400px] p-6 flex flex-col gap-4">
                  <div className="font-bold text-lg text-blue-700">
                    Similar Photos
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-200 h-24 rounded-lg border-2 border-yellow-400 relative">
                      <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Icon
                          icon="lucide:check"
                          className="w-3 h-3 text-black"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-200 h-24 rounded-lg opacity-50"></div>
                    <div className="bg-gray-200 h-24 rounded-lg opacity-50"></div>
                    <div className="bg-gray-200 h-24 rounded-lg opacity-50"></div>
                  </div>
                  <div className="mt-auto bg-yellow-400 text-center py-4 rounded-xl font-bold text-base">
                    Keep 1 Best Photo
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/5fa8cc53-14f4-4294-977f-f7f9f41d4dd8.jpg"
                  alt="Happy Bee"
                  width={120}
                  height={120}
                  className="absolute bottom-4 left-0 rounded-full shadow-md border-4 border-white"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature 2: Video Cleanup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 gap-20 items-center mb-20"
        >
          <motion.div variants={slideInLeft} className="order-2 md:order-1">
            <div className="bg-green-100 rounded-2xl p-10">
              <div className="bg-white rounded-2xl shadow-lg max-w-sm mx-auto border-8 border-gray-900">
                <div className="bg-green-100 rounded-xl h-[400px] p-6 flex flex-col gap-4">
                  <div className="font-bold text-lg text-green-700">
                    Large Videos
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-4 rounded-xl flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Icon
                          icon="lucide:play"
                          className="w-5 h-5 text-gray-500"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">
                          Concert_2024.mp4
                        </div>
                        <div className="text-red-700 text-sm font-bold">
                          2.4 GB
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Icon
                          icon="lucide:play"
                          className="w-5 h-5 text-gray-500"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">Dog_park.mov</div>
                        <div className="text-red-700 text-sm font-bold">
                          1.1 GB
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto bg-gray-900 text-white text-center py-4 rounded-xl font-bold text-base">
                    Delete Selected (3.5 GB)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={slideInRight} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold mb-4">
              <Icon icon="lucide:video" className="w-4 h-4" />
              Video Cleanup
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Spot the space hogs instantly.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Videos take up the most space. BeeClean groups your largest
              videos in one place, making it simple to review and delete the
              ones you no longer need.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature 3: Smart Compression */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={slideInLeft}>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold mb-4">
              <Icon icon="lucide:minimize-2" className="w-4 h-4" />
              Smart Compression
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Keep the memory, lose the weight.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Don&apos;t want to delete a video? Shrink it! Our advanced
              compression algorithm reduces file sizes by up to 80% with
              barely any visible loss in quality.
            </p>
          </motion.div>
          <motion.div variants={slideInRight} className="relative">
            <div className="bg-purple-100 rounded-2xl p-10">
              <div className="bg-white rounded-2xl shadow-lg max-w-sm mx-auto border-8 border-gray-900">
                <div className="bg-purple-100 rounded-xl h-[400px] p-6 flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-6"
                  >
                    <Icon
                      icon="lucide:arrow-down-to-line"
                      className="w-12 h-12 text-purple-600"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl font-extrabold text-purple-700 mb-2"
                  >
                    -80%
                  </motion.div>
                  <div className="text-base font-semibold text-purple-700 opacity-80">
                    Size Reduced
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full bg-white rounded-xl p-5 mt-8"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Original
                      </span>
                      <span className="font-bold">1.2 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 font-semibold">
                        Compressed
                      </span>
                      <span className="text-purple-700 font-bold">
                        240 MB
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
