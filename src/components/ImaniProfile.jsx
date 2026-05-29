import { motion } from 'framer-motion';
import './ImaniProfile.css';

export default function ImaniProfile() {
  return (
    <section id="imani" style={{ paddingTop: 0 }}>
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        The Griot
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Meet <em>Imani.</em>
      </motion.h2>

      <motion.div 
        className="imani-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="imani-grid">
          <div>
            <div className="imani-stat">
              <div className="imani-stat-label font-space">Name & Meaning</div>
              <div className="imani-stat-value font-playfair">Imani — Faith</div>
            </div>
            <div className="imani-stat">
              <div className="imani-stat-label font-space">Home</div>
              <div className="imani-stat-value font-playfair">Southern Nigeria</div>
            </div>
            <div className="imani-stat">
              <div className="imani-stat-label font-space">Role</div>
              <div className="imani-stat-value font-playfair">Teenage Griot</div>
            </div>
            <div className="imani-stat">
              <div className="imani-stat-label font-space">Her Question</div>
              <div className="imani-stat-value font-playfair" style={{ fontStyle: 'italic', color: 'var(--afro-yellow)' }}>
                What exactly is life?
              </div>
            </div>
          </div>
          
          <div>
            <div className="imani-stat">
              <div className="imani-stat-label font-space">Who She Is</div>
              <div className="font-cormorant" style={{ fontSize: '18px', color: 'var(--sand)', lineHeight: 1.8 }}>
                The girl everyone comes to. She has words for other people's pain, clarity for other people's confusion. Calm on the surface. A private world quietly unraveling underneath.
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ marginTop: '32px', textAlign: 'center' }}
            >
              <img 
                src="/assets/imani_sunset.png" 
                alt="Imani deep in thought" 
                style={{ 
                  width: '100%', 
                  maxWidth: '300px',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
                }} 
              />
            </motion.div>
          </div>
          
          <div className="imani-contradiction font-cormorant">
            <p>
              She gives advice. She does not have answers.<br/>
              She holds people together. She is quietly unraveling.<br/>
              She was named Faith. She is still searching for it.<br/>
              She tells everyone else's stories. She is still writing her own.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
