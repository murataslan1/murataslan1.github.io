import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  {
    number: 50,
    suffix: '+',
    label: 'Projects Launched',
    image: '/images/avatar-waving.png',
    imagePosition: 'left',
  },
  {
    number: 40,
    suffix: '+',
    label: 'Clients Served',
    image: '/images/avatar-smiling.png',
    imagePosition: 'right',
  },
  {
    number: 96,
    suffix: '%',
    label: 'Satisfaction Rate',
    image: '/images/avatar-thinking-2.png',
    imagePosition: 'left',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-gray-900">
      {count}
      {suffix}
    </span>
  );
}

export default function AchievementsSection() {
  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Little Big Wins</h2>
        </motion.div>

        {/* Stats Cards */}
        <motion.div variants={containerVariants} className="space-y-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-3xl p-6 md:p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                  stat.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-28 h-28 md:w-36 md:h-36 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                  <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
