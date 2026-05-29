import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className="manifesto">
        <div className="manifesto-lines">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="manifesto-line font-playfair"
          >
            No story is too small.
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="manifesto-line accent font-playfair"
          >
            No story is too old.
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="manifesto-line font-playfair"
          >
            If it is African —
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="manifesto-line bold font-playfair"
          >
            it belongs here.
          </motion.div>
        </div>
      </div>

      <section id="channel" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="channel-card">
          <div className="channel-icon">🌍</div>
          <div className="channel-info">
            <h3 className="font-playfair">She Is African</h3>
            <p className="font-cormorant">New episodes releasing soon. Subscribe to be there from the beginning — before the world catches on.</p>
            <div className="channel-actions">
              <a href="https://youtube.com/@sheisafrican" target="_blank" rel="noreferrer" className="btn">Subscribe Now</a>
              <a href="mailto:sheisafrican@gmail.com" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo font-playfair">She Is African</div>
        <p className="font-space">A teenage griot. A continent of stories.</p>
        <p className="font-space">© 2026 She Is African</p>
      </footer>
    </>
  );
}
