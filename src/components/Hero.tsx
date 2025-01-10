import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Transform Your Digital Presence
          </h1>
          <p className="mb-8 text-xl">
            Innovative marketing strategies to elevate your brand and drive growth.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;