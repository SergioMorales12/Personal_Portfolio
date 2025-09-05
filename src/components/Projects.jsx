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

export const Projects = () => {
    const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <motion.section
      id="projects"
      className="projects"
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
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => handleProjectClick("https://github.com/SergioMorales12/LoginLidl.git")}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/loginLidl1.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            

          />
          <h3> Mobile app replica of the Lidl's login</h3>
          <p>
            Mobile application that replicates Lidl's authentication interface, implementing best practices in design and functionality.
          </p>
          <div className="project-tech">
            <span>Kotlin</span>
            <span>Jeckpack Compose</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => handleProjectClick("https://github.com/SergioMorales12/Plaga-de-la-granja--Defensa-al-amanecer.git")}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/game-2d.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Plaga de la Granja: Defensa al Amanecer</h3>
          <p>
             Plaga de la Granja: Defensa al Amanecer transports the player to a farm plunged
             into the chaos of an apocalypse, where nothing is as it seems. Amidst the
             uncertainty, a mad farmer and unknown forces threaten to destroy the land. 
             The player's only defence will be strategic towers and farming tools, which 
             they must use wisely to resist the waves of enemies.
          </p>
          <div className="project-tech">
            <span>GDScript</span>
            <span>Godot</span>
            <span>Firebase</span>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};
