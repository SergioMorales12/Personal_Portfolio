import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Experiences = () => {
  return (
    <motion.section
      id="experience"
      className="experiences"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Experience
      </motion.h2>
      <motion.div
        className="experience-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="experience-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/Enterprise/NI.png')" }}
            whileHover={{ scale: 1, transition: { duration: 0.2 } }}
          />
          <h3> Data Engeneer on NI (National Instrumens - Emerson) </h3>
 
          <h4> Debrecen, Hajdú-Bihar, Hungría</h4>

          <p><i>03/2025 - 06/2025</i></p>

          <p>
            <b> - Design and maintain efficient and scalable data pipelines using Python</b> to ensure data quality and availability.</p>
          <p>  
            <b> - Manage databases in Snowflake</b>, optimizing storage and queries to support fast and reliable analysis.</p>
          <p>
            <b> - Develop interactive dashboards in Tableau</b> to visualize key metrics and facilitate decision-making.</p>
          <p>
            <b> - Create customized KPIs (Key Performance Indicators)</b> that enabled business teams to monitor performance and identify areas for improvement.
          </p>

          <div className="experience-tech">
            <span>Snoflake</span>
            <span>Python</span>
            <span>SQL</span>
            <span>Tableau</span>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};
