"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-900 text-yellow-400 px-12 py-5 text-xl font-bold rounded-full relative z-10"
          >
            Get Started Now
          </motion.button>
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
