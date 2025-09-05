import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

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

export const Hero = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("sergiomoralescoronil@gmail.com"); 
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Sergio Morales Coronil
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Junior Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I am a junior developer with a broad technology stack and a great ability to adapt.
            I enjoy creating solutions ranging from mobile and web applications to video games, using a variety of technologies. 
            I am motivated by continuous learning and transforming ideas into functional products.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a 
              href="https://github.com/SergioMorales12" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaGithub />
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/sergio-morales-coronil-121a45299" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin />
            </motion.a>
            
            <motion.a 
              href="https://www.hackerrank.com/profile/sergiogatete12" 
              target="_blank"  
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaHackerrank />
            </motion.a>

            <motion.div 
              style={{ 
                position: "relative", 
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
              onClick={handleEmailCopy}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
              {emailCopied && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "absolute",
                    top: "-25px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#333",
                    color: "#fff",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    whiteSpace: "nowrap"
                  }}
                >
                  ¡Copiado!
                </motion.span>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Sergio Morales Coronil",
  origin: "Andalusia, Spain",
  role: "Junior Developer", 
  stack: {
    languages: {
      proficient: ["Kotlin", "Python", "Java", "Dart", "C#","SQL"],
      familiar: ["JavaScript", "TypeScript", "HTML/CSS"]
      },
    frameworks: ["Spring Boot", "Flutter", "React", "Vite"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    tools: ["Android Studio", "Unity", "Godot", "Git", "Docker"],
    platforms: ["Android", "Web", "Desktop"]
  },
  traits: [
    "Versatile and multidisciplinary",
    "Quick learner",
    "Focused on complete projects",
    "reative and decisive",
    "Proactive"
  ],
  missionStatement:
    "Learn, create, and innovate to transform ideas into digital experiences that deliver real value.",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};