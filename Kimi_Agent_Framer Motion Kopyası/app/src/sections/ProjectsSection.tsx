import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const projects = [
  {
    testimonial: 'Smooth, stylish, and intuitive – exactly the kind of experience our audience expects.',
    author: 'Jack S., Gallery Director',
    title: 'Revix',
    description: 'Minimalist website for modern gallery, with bold type and smooth navigation.',
    image: '/images/project-revix.jpg',
  },
  {
    testimonial: 'More bookings. Less hassle. The site does its job perfectly and looks great doing it.',
    author: 'Samantha R., CEO',
    title: 'Lustra',
    description: 'Fast, elegant, and conversion-focused, it\'s built to boost bookings and build trust.',
    image: '/images/project-lustra.jpg',
  },
  {
    testimonial: 'It\'s the first time my portfolio really feels like me – clean, stylish, and built to impress.',
    author: 'Olivia R., UX/UI Designer',
    title: 'Rivers',
    description: 'Portfolio for a developer to present work, share journey, and stand out with style.',
    image: '/images/project-rivers.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : projects.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < projects.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section className="py-16 px-4" id="works">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Projects</h2>
          </div>
          <motion.button
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors w-fit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All
          </motion.button>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div variants={itemVariants} className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gray-50 rounded-3xl overflow-hidden h-full">
                  {/* Testimonial */}
                  <div className="p-6 pb-4">
                    <p className="text-sm text-gray-600 italic mb-3">"{project.testimonial}"</p>
                    <p className="text-xs text-gray-500">{project.author}</p>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                    <motion.button
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-500 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors hidden lg:flex"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors hidden lg:flex"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div variants={itemVariants} className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-gray-900 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
