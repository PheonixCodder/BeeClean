"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isActive, onClick }: FAQItemProps) {
  return (
    <motion.div
      variants={scaleIn}
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-br from-white to-gray-50 shadow-lg border-2 border-blue-100"
          : "bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
    >
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="w-full p-6 flex justify-between items-center text-left cursor-pointer"
        onClick={onClick}
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-600"
        >
          <Icon
            icon="lucide:chevron-down"
            className="w-6 h-6"
          />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Decorative accent */}
      {isActive && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        />
      )}
    </motion.div>
  );
}

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqs = [
    {
      question: "Is it safe to use?",
      answer:
        "Yes, 100%. BeeClean runs locally on your device. We do not upload your photos or videos to any external servers. Your privacy and data security are our top priorities.",
    },
    {
      question: "Does it delete important files?",
      answer:
        "No. BeeClean only organizes and suggests files for deletion (like exact duplicates). You always have the final say on what gets deleted. Nothing is removed without your confirmation.",
    },
    {
      question: "How does the AI work?",
      answer:
        "Our proprietary AI uses computer vision algorithms optimized for mobile to analyze pixels, timestamps, and metadata to group visually identical or highly similar images together.",
    },
    {
      question: "Is it free?",
      answer:
        "BeeClean offers a generous free tier that lets you clean up to 5GB of data. For unlimited cleaning and advanced compression features, we offer a Premium subscription.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4">Common questions</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="max-w-3xl mx-auto flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeFaq === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
