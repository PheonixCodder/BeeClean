"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("@iconify/react").then((mod) => mod.Icon), {
  ssr: false,
});

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl border-gray-100" : "bg-transparent backdrop-blur-md"}`}
    >
      <div className="container p-[30px]! mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center"
            >
              <Icon icon="lucide:bug" className="w-5 h-5 text-amber-900" />
            </motion.div>
            <span className="text-2xl font-bold">BeeClean</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "How it Works", "Testimonials", "FAQ"].map(
              (item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  whileHover={{ y: -3 }}
                  className="text-gray-600 font-semibold hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ),
            )}
          </nav>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(255, 216, 77, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-6 py-3 text-base font-bold rounded-full"
          >
            Get the App
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
}
