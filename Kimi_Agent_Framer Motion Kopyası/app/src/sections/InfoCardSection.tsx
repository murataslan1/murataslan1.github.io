import { motion } from 'framer-motion';
import { Home, Briefcase, FileText, Mail, MapPin } from 'lucide-react';

const socialButtons = [
  { icon: Home, href: '#', label: 'Home' },
  { icon: Briefcase, href: '#works', label: 'Works' },
  { icon: FileText, href: '#about', label: 'About' },
  { icon: Mail, href: '#contact', label: 'Contact', primary: true },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function InfoCardSection() {
  return (
    <section className="py-10 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Description */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                  Full-stack developer with a love for clean UI and fast apps
                </h2>
              </div>
              <div className="flex justify-center md:justify-start">
                <img
                  src="/images/avatar-laptop.png"
                  alt="Jordan with laptop"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Based In</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900">Berlin, Germany</span>
                  <MapPin className="w-5 h-5 text-blue-500 fill-blue-500" />
                </div>
              </div>

              {/* Coding Since Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Coding Since</p>
                <p className="text-lg font-semibold text-gray-900">June 2015</p>
                <div className="mt-3 p-3 bg-gray-50 rounded-lg font-mono text-xs text-gray-600">
                  <p className="text-gray-400">&lt;!DOCTYPE html&gt;</p>
                  <p className="text-gray-400">&lt;html lang=&quot;en&quot;&gt;</p>
                  <p className="text-gray-400 pl-2">&lt;head&gt;</p>
                  <p className="text-gray-400 pl-4">&lt;meta charset=&quot;UTF-8&quot; /&gt;</p>
                  <p className="pl-4">
                    <span className="text-gray-400">&lt;title&gt;</span>
                    <span>Hi, I'm Jordan</span>
                    <span className="text-gray-400">&lt;/title&gt;</span>
                  </p>
                  <p className="text-gray-400 pl-2">&lt;/head&gt;</p>
                  <p className="text-gray-400 pl-2">&lt;body&gt;</p>
                  <p className="text-gray-400 pl-2">&lt;/body&gt;</p>
                  <p className="text-gray-400">&lt;/html&gt;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            {socialButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
                  button.primary
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={button.label}
              >
                <button.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
