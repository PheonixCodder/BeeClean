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

interface TestimonialProps {
  name: string;
  flag: string;
  avatar: string;
  quote: string;
}

function TestimonialCard({ name, flag, avatar, quote }: TestimonialProps) {
  return (
    <motion.div variants={scaleIn} className="card p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex gap-1 mb-6"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Icon
              icon="lucide:star"
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          </motion.div>
        ))}
      </motion.div>
      <p className="text-base mb-6 text-gray-700">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-4">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="font-bold text-sm">{name}</div>
          <div className="text-gray-500 text-xs">{flag}</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      flag: "🇺🇸 United States",
      avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FNorth%20American%2F1",
      quote: "I had 0 bytes left on my phone. BeeClean found 15GB of duplicate screenshots and massive old videos in literally 10 seconds. Absolutely life-saving app!",
    },
    {
      name: "David L.",
      flag: "🇬🇧 United Kingdom",
      avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F35-50%2FEuropean%2F2",
      quote: "The compression feature is magic. I didn't want to delete videos of my kids, but they took up 40GB. Shrunk them down to 8GB and they still look perfect.",
    },
    {
      name: "Emma W.",
      flag: "🇨🇦 Canada",
      avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F18-25%2FEast%20Asian%2F3",
      quote: "I love the little bee mascot! It makes what is normally a boring chore actually kind of fun. Very clean, intuitive interface. Highly recommend!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-32 bg-yellow-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4">
            Trusted by thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join over 50,000 users who have reclaimed their storage space and
            peace of mind.
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
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
