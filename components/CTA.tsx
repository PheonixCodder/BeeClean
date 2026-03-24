"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const Icon = dynamic(() => import("@iconify/react").then((mod) => mod.Icon), {
  ssr: false,
});

export default function CTA() {
  return (
    <section className="py-32 text-center relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-300 opacity-30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-300 opacity-30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 rounded-[40px] p-20 relative overflow-hidden shadow-2xl"
        >
          {/* Pulse ring effect */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 border-4 border-amber-200 rounded-[40px]"
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-extrabold mb-6 text-amber-900 relative"
          >
            Reclaim your storage
            <br />
            in seconds
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl mb-10 text-amber-900 opacity-90 relative max-w-2xl mx-auto"
          >
            Join thousands of happy users and a very happy bee.
            <br />
            Download BeeClean today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
          >
            <motion.a
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-gray-900 to-black text-white px-8 py-5 rounded-xl flex items-center gap-3 shadow-xl transition-all cursor-pointer hover:shadow-2xl"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon icon="logos:apple-app-store" className="w-12 h-12" />
              </motion.div>
              <div className="text-left">
                <div className="text-xs opacity-75">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-gray-900 to-black text-white px-8 py-5 rounded-xl flex items-center gap-3 shadow-xl transition-all cursor-pointer hover:shadow-2xl"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Icon icon="logos:google-play-icon" className="w-12 h-12" />
              </motion.div>
              <div className="text-left">
                <div className="text-xs opacity-75">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: 0.15,
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-80px] bottom-[-80px]"
          >
            <Image
              src="/background.png"
              alt="Celebrating Bee Mascot"
              width={500}
              height={500}
              className=""
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
