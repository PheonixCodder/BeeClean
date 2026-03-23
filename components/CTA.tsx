"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const Icon = dynamic(() => import("@iconify/react").then((mod) => mod.Icon), {
  ssr: false,
});

export default function CTA() {
  return (
    <section className="py-32 text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="bg-yellow-400 rounded-[40px] p-20 relative overflow-hidden"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-extrabold mb-6 text-amber-900"
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
            className="text-xl mb-10 text-amber-900 opacity-90"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-200 text-black px-8 py-4 rounded-lg flex items-center gap-3 shadow-lg transition-all cursor-pointer"
            >
              <Icon icon="logos:apple-app-store" className="w-10 h-10" />
              <div className="text-left">
                <div className="text-xs opacity-75">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-200 text-black px-8 py-4 rounded-lg flex items-center gap-3 shadow-lg transition-all cursor-pointer"
            >
              <Icon icon="logos:google-play-icon" className="w-10 h-10" />
              <div className="text-left">
                <div className="text-xs opacity-75">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.2, rotate: [0, 10, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/background.png"
              alt="Celebrating Bee Mascot"
              width={400}
              height={400}
              className="absolute right-[-50px] bottom-[-50px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
