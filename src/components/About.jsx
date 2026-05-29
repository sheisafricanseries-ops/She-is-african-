import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        What This Is
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Africa is not <em>one story.</em><br/>It never was.
      </motion.h2>

      <div className="about-grid">
        <motion.div 
          className="about-text font-cormorant"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>My name is Imani. I am a storyteller.</p>
          <p>Africa gave me that. A continent so wide, so ancient, so full of life that one voice could spend a lifetime just trying to hold it — and still not reach the edges.</p>
          <p>So I animate it instead.</p>
          <p><strong>She Is African</strong> is an anthology series about African people — their lives, their history, their everyday moments, their extraordinary ones. Girls and boys. Women and men. The ancient and the present.</p>
          <p>The ones history tried to erase. The ones happening right now in a city that looks a lot like yours. The joyful ones. The heavy ones. The funny ones. The ones that never made it into any history book. The ones your aunty tells at family dinners when she thinks the children are not listening.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div style={{ marginBottom: '32px' }}>
            <img 
              src="/assets/imani_storytelling.png" 
              alt="Imani Storytelling" 
              style={{ 
                width: '100%', 
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
              }} 
            />
          </div>

          <div className="about-quote">
            <blockquote className="font-cormorant">
              "The ones your aunty tells at family dinners when she thinks the children are not listening."
            </blockquote>
            <cite className="font-space">— Imani, Griot</cite>
          </div>

        </motion.div>
      </div>

      <motion.div 
        className="stats-typographic"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="stat-line">
          <span className="stat-huge font-playfair">54</span>
          <span className="stat-desc font-space">Countries.</span>
        </div>
        <div className="stat-line">
          <span className="stat-huge font-playfair">∞</span>
          <span className="stat-desc font-space">Stories.</span>
        </div>
        <div className="stat-line">
          <span className="stat-huge font-playfair">1</span>
          <span className="stat-desc font-space">Griot to tell them.</span>
        </div>
      </motion.div>
    </section>
  );
}
