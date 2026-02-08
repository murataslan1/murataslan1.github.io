import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function WhatIDoSection() {
  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Card - What I Do */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-50 rounded-3xl p-6 md:p-8"
          >
            <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 mb-6 shadow-sm">
              What I Do
            </span>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
              Focused on fast builds, clean code, and smart design
            </p>
          </motion.div>

          {/* Right Card - Always Learning */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-50 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 mb-6 shadow-sm">
              Always Learning
            </span>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed mb-4">
              Exploring Next.js & Rust
            </p>
            <div className="absolute bottom-4 right-4">
              <img
                src="/images/avatar-thinking.png"
                alt="Thinking"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
