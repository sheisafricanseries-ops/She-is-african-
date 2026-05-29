import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      
      {/* Background Image with Mask */}
      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src="/assets/imani.jpeg" alt="Imani" className="hero-image" />
      </motion.div>

      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-eyebrow font-space"
        >
          An Animated Anthology Series
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title font-playfair"
        >
          She Is
          <span>African.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-subtitle font-cormorant"
        >
          Thousands of stories. Fifty-four countries. One continent. Told by a teenage griot who refuses to let them disappear.
        </motion.p>
      </div>

    </div>
  );
}
