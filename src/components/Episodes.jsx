import { motion } from 'framer-motion';
import './Episodes.css';

const episodes = [
  { id: '01', layer: 'personal', title: 'The Griot', region: 'Southern Nigeria · Present', seed: 'We meet Imani. Her world. Her question. Why she tells stories.', img: '/assets/imani_storytelling.png' },
  { id: '02', layer: 'community', title: 'Coming Soon', region: 'Ghana · Present', seed: 'A story from Ghana — in development through deep cultural research.', img: '/assets/imani_walking.png' },
  { id: '03', layer: 'historical', title: 'Coming Soon', region: 'Mali Empire · 1324', seed: 'A story from the height of African empire. History that was always ours.', img: '/assets/imani_reading.png' },
  { id: '04', layer: 'community', title: 'Coming Soon', region: 'Nairobi · Present', seed: "A boy's story. Pressure, identity, what it costs to become a man.", img: '/assets/imani_laughing.png' },
  { id: '05', layer: 'historical', title: 'Coming Soon', region: 'Transatlantic Slave Trade', seed: 'Not just suffering — resistance. A story of those who never stopped.', img: '/assets/imani_sunset.png' },
  { id: '06', layer: 'personal', title: 'The Mother Episode', region: 'Southern Nigeria · Present', seed: "We see Imani's mother's story. The audience already knows her — now they see her.", img: '/assets/imani_cute.png' },
];

export default function Episodes() {
  return (
    <section id="stories">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        The Archive
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Three layers.<br/><em>Infinite stories.</em>
      </motion.h2>

      <div className="layer-legend font-space">
        <div className="legend-item personal"><span>PERSONAL</span></div>
        <div className="legend-item community"><span>COMMUNITY</span></div>
        <div className="legend-item historical"><span>HISTORICAL</span></div>
      </div>

      <div className="episodes-list">
        {episodes.map((ep, i) => (
          <motion.div 
            key={ep.id}
            className="episode-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="ep-bg-num font-playfair">{ep.id}</div>
            <img src={ep.img} alt={ep.title} className="ep-hover-img" />
            
            <div className="ep-content">
              <div className="ep-header">
                <span className={`ep-layer ${ep.layer} font-space`}>{ep.layer}</span>
                <span className="ep-region font-space">{ep.region}</span>
              </div>
              <h3 className="ep-title font-playfair">{ep.title}</h3>
              <p className="ep-seed font-cormorant">{ep.seed}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
