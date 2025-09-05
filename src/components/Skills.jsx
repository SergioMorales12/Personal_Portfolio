import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaMobileAlt } from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiSpringboot, 
  SiFlutter, SiReact, SiVite, SiMysql, SiPostgresql, 
  SiMongodb, SiFirebase, SiAndroidstudio, SiUnity, 
  SiDocker, SiGit, SiKotlin, SiDart
} from "react-icons/si";

// Iconos genéricos para lenguajes sin icono oficial
import { BsCodeSlash } from "react-icons/bs";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FiLayers } from "react-icons/fi";
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const Skills = () => {

  const skillsData = {
    languages: {
      proficient: ["Kotlin", "Python", "Java", "Dart", "C#", "SQL"],
      familiar: ["JavaScript", "TypeScript", "HTML/CSS"]
    },
    frameworks: ["Spring Boot", "Flutter", "React", "Vite"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    tools: ["Android Studio", "Unity", "Godot", "Git", "Docker"],
    platforms: ["Android", "Web", "Desktop"]
  };

  // Mapeo de iconos mejorado
  const skillIcons = {
    // Lenguajes
    "Kotlin": <SiKotlin />,
    "Python": <i className="fab fa-python"></i>,
    "Java": <i className="fab fa-java"></i>,
    "Dart": <SiDart />,
    "C#": <BsCodeSlash />,
    "SQL": <FaDatabase />,
    "JavaScript": <SiJavascript />,
    "TypeScript": <SiTypescript />,
    "HTML/CSS": <div className="html-css-icons"><SiHtml5 /><SiCss3 /></div>,
    
    // Frameworks
    "Spring Boot": <SiSpringboot />,
    "Flutter": <SiFlutter />,
    "React": <SiReact />,
    "Vite": <SiVite />,
    
    // Databases
    "MySQL": <SiMysql />,
    "PostgreSQL": <SiPostgresql />,
    "MongoDB": <SiMongodb />,
    "Firebase": <SiFirebase />,
    
    // Tools
    "Android Studio": <SiAndroidstudio />,
    "Unity": <SiUnity />,
    "Godot": <FaTools />,
    "Git": <SiGit />,
    "Docker": <SiDocker />,
    
    // Platforms
    "Android": <SiAndroidstudio />,
    "Web": <FaCode />,
    "Desktop": <FaTools />
  };

  return (
    <motion.section 
      id="skills" 
      className="skills-section"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <motion.h2 className="section-title">Skills</motion.h2>

      <motion.div className="skill-category">
        <div className="category-header">
          <FaCode className="category-icon" />
          <h3>Languages</h3>
        </div>
        
        <div className="skill-subcategory">
          <h4><b>Proficient</b></h4>
          <div className="skills-list">
            {skillsData.languages.proficient.map((skill) => (
              <motion.div 
                key={skill}
                className="skill-item"
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon">{skillIcons[skill]}</div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="skill-subcategory">
          <h4><b>Familiar</b></h4>
          <div className="skills-list">
            {skillsData.languages.familiar.map((skill) => (
              <motion.div 
                key={skill}
                className="skill-item"
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon">{skillIcons[skill]}</div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {Object.entries(skillsData).slice(1).map(([category, items]) => (
        <motion.div key={category} className="skill-category">
          <div className="category-header">
            {category === "frameworks" && <FiLayers className="category-icon" />}
            {category === "databases" && <FaDatabase className="category-icon" />}
            {category === "tools" && <FaTools className="category-icon" />}
            {category === "platforms" && <FaMobileAlt className="category-icon" />}
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          </div>
          
          <div className="skills-list">
            {items.map((item) => (
              <motion.div 
                key={item}
                className="skill-item"
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon">{skillIcons[item]}</div>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};