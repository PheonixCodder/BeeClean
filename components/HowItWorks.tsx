"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("@iconify/react").then((mod) => mod.Icon), {
  ssr: false,
});

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4">How BeeClean works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to a cleaner, faster phone.
          </p>
        </motion.div>

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
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {/* Step 1 */}
          <motion.div variants={scaleIn} className="card text-center p-10">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                icon="lucide:scan-face"
                className="w-8 h-8 text-blue-700"
              />
            </motion.div>
            <h4 className="text-2xl font-bold mb-4">1. Quick Scan</h4>
            <p className="text-gray-600">
              Give BeeClean access, and it instantly scans your entire gallery
              and file system for clutter.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={scaleIn} className="card text-center p-10">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                icon="lucide:brain-circuit"
                className="w-8 h-8 text-purple-700"
              />
            </motion.div>
            <h4 className="text-2xl font-bold mb-4">2. AI Detection</h4>
            <p className="text-gray-600">
              Our smart algorithms identify duplicates, large videos, and
              blurry photos that are safe to remove.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={scaleIn} className="card text-center p-10">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                icon="lucide:sparkles"
                className="w-8 h-8 text-green-700"
              />
            </motion.div>
            <h4 className="text-2xl font-bold mb-4">3. Instant Cleanup</h4>
            <p className="text-gray-600">
              Review the suggestions and tap clean. Reclaim gigabytes of space
              in just a few seconds.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
