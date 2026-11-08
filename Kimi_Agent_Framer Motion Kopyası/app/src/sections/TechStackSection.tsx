import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', description: 'For building fast, interactive UIs', icon: '⚛️' },
      { name: 'Next.js', description: 'React framework with routing & SSR', icon: '▲' },
      { name: 'TypeScript', description: 'Typed JavaScript for safer code', icon: 'TS' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', description: 'JavaScript runtime for servers', icon: '🟢' },
      { name: 'Express', description: 'Minimal framework for APIs', icon: 'EX' },
      { name: 'MongoDB', description: 'Flexible NoSQL database system', icon: '🍃' },
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', description: 'Version control and collaboration', icon: '🐙' },
      { name: 'Docker', description: 'Containers for isolated environments', icon: '🐳' },
    ],
  },
  {
    title: 'Design & Workflow',
    items: [
      { name: 'Figma', description: 'Interface design and prototyping', icon: 'F' },
      { name: 'Notion', description: 'Planning and docs in one place', icon: 'N' },
    ],
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

export default function TechStackSection() {
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
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What I Use</h2>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-x-12 gap-y-10"
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-sm font-medium text-gray-500 mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex items-start gap-3 group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700 flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
