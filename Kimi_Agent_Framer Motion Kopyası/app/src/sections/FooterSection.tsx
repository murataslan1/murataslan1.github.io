import { motion } from 'framer-motion';
import { Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';

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

const menuLinks = [
  { label: 'Home', href: '#' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
];

const socialLinks = [
  { label: 'X (Twitter)', href: 'https://x.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
];

const exploreLinks = [
  { label: 'Templates', href: '#' },
  { label: 'NutsDev', href: '#' },
];

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-8 px-4" id="contact">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Project
          </motion.button>
        </motion.div>

        {/* Email Cards */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-4 mb-16"
        >
          <motion.a
            href="mailto:hello@bluren.dev"
            className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Let's Talk</p>
            <p className="text-lg font-semibold text-gray-900">hello@bluren.dev</p>
          </motion.a>
          <motion.a
            href="mailto:collab@bluren.dev"
            className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Collaborations</p>
            <p className="text-lg font-semibold text-gray-900">collab@bluren.dev</p>
          </motion.a>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 pt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Logo Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/avatar-hero.png"
                  alt="Jordan"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Hi, I'm Jordan.</p>
                  <p className="text-xs text-gray-500">I press buttons and interfaces happen</p>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Menu</p>
              <ul className="space-y-2">
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Follow</p>
              <ul className="space-y-2">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Explore</p>
              <ul className="space-y-2">
                {exploreLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">© 2024, Bluren</p>
            <motion.button
              onClick={scrollToTop}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
              whileHover={{ y: -2 }}
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
