import { motion } from 'framer-motion';
import { Briefcase, Clock, Smartphone, Monitor, Code, Paintbrush, Zap, Server } from 'lucide-react';

const statsBadges = [
  { icon: Briefcase, text: '50+ Projects', bg: 'bg-amber-100', textColor: 'text-amber-800' },
  { icon: Briefcase, text: '40+ Clients', bg: 'bg-amber-100', textColor: 'text-amber-800' },
  { icon: Clock, text: '10+ Years in Dev', bg: 'bg-gray-100', textColor: 'text-gray-700' },
  { icon: Smartphone, text: '15+ Live Apps', bg: 'bg-green-100', textColor: 'text-green-700' },
  { icon: Monitor, text: '35+ Websites', bg: 'bg-gray-100', textColor: 'text-gray-700' },
];

const skillsBadges = [
  { icon: Paintbrush, text: 'Pixel Perfect', bg: 'bg-amber-100', textColor: 'text-amber-800' },
  { icon: Zap, text: 'Full Stack Dev', bg: 'bg-purple-100', textColor: 'text-purple-700' },
  { icon: Paintbrush, text: 'UX Focused', bg: 'bg-blue-100', textColor: 'text-blue-700' },
  { icon: Server, text: 'API Builder', bg: 'bg-green-100', textColor: 'text-green-700' },
  { icon: Code, text: 'React Expert', bg: 'bg-red-100', textColor: 'text-red-700' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'backOut' as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      <motion.div
        className="flex flex-col items-center text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div variants={avatarVariants} className="mb-8">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg">
            <img
              src="/images/avatar-hero.png"
              alt="Jordan"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Hi, I'm Jordan.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-500 mb-12 max-w-2xl"
        >
          I press buttons and interfaces happen
        </motion.p>

        {/* Marquee Row 1 - Stats */}
        <motion.div variants={itemVariants} className="w-full mb-4 marquee-container">
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee-left marquee-content">
              {[...statsBadges, ...statsBadges].map((badge, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${badge.bg} ${badge.textColor} whitespace-nowrap flex-shrink-0`}
                >
                  <badge.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Marquee Row 2 - Skills */}
        <motion.div variants={itemVariants} className="w-full mb-16 marquee-container">
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee-right marquee-content">
              {[...skillsBadges, ...skillsBadges].map((badge, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${badge.bg} ${badge.textColor} whitespace-nowrap flex-shrink-0`}
                >
                  <badge.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
