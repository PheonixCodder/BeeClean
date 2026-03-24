"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("@iconify/react").then((mod) => mod.Icon), {
  ssr: false,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "How it Works", "Pricing", "FAQ"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact", "Status"],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 py-16 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 honeycomb-pattern" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Icon icon="lucide:bug" className="w-6 h-6 text-amber-900" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                BeeClean
              </span>
            </motion.div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              Smart AI that removes duplicates, compresses files, and frees up space automatically.
            </p>
            <div className="flex gap-4">
              {['twitter', 'facebook', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Icon icon={`lucide:${social}`} className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <motion.div key={column.title} variants={fadeInUp}>
              <h4 className="font-bold text-gray-900 mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-sm">
            © {currentYear} BeeClean. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
