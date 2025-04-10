import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import React, { useState, useEffect, useRef } from 'react';

// Animated code comments that display in the background
const codeComments = [
  "// passionate about Linux and system administration",
  "/* proficient in Python  */",
  "// experienced with git-based development workflows",
  "/* constantly learning  */",
  "// familiar with web development technologies",
  "/* background in MIS */",
  "// always exploring new Linux distributions",
  "/* committed to continuous improvement */",
];

// Typing effect phrases
const typingPhrases = [
  "Linux Enthusiast",
  "Open Source Advocate",
  "Problem Solver",
  "Continuous Learner",
  "Developer & System Administrator"
];

// Core skills for About Me section
const coreSkills = [
  "Linux", "Python", "Git", "Fedora", 
  "System Administration", "Shell Scripting", 
  "Web Development", "CI/CD", "Automation"
];

// TypeWriter component for typing effect with cursor
function TypeWriter() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const _currentPhrase = typingPhrases[loopNum % typingPhrases.length];
  const _typingDelay = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % typingPhrases.length;
      const fullText = typingPhrases[currentIndex];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 80 : 150);
      
      if (!isDeleting && text === fullText) {
        // Pause at end of phrase
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prevLoop => prevLoop + 1);
        // Pause before typing new phrase
        setTypingSpeed(500);
      }
    };
    
    _typingDelay.current = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(_typingDelay.current);
  }, [text, isDeleting, loopNum, typingSpeed]);
  
  return (
    <div className={styles.typingEffectContainer}>
      <span className={styles.typingEffect}>{text}</span>
    </div>
  );
}

function AboutMeSection() {
  return (
    <div className={styles.aboutMeSection}>
      <div className={styles.aboutMeHeader}>
        <img 
          src="https://github.com/cyber-syntax.png" 
          alt="Profile" 
          className={styles.profilePicture}
        />
        <div>
          <h2 className={styles.aboutMeTitle}>
            About Me
            <span className={styles.aboutMeSubtitle}>Developer & System Administrator</span>
          </h2>
        </div>
      </div>
      <p className={styles.aboutMeContent}>
        I'm passionate about Linux and system administration with a drive for continuous learning and improvement.
        With expertise in Python and experience with git-based development workflows, I enjoy exploring the 
        ever-evolving landscape of technology.
      </p>
      <p className={styles.aboutMeContent}>
        My background in Management Information Systems (MIS) has provided me with a solid foundation for 
        understanding both technical and business requirements. I'm familiar with web development technologies
        and always exploring new Linux distributions to expand my knowledge.
      </p>
      <div className={styles.aboutMeSkills}>
        {coreSkills.map((skill, index) => (
          <span key={index} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [showWiki, setShowWiki] = useState(false);
  
  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundComments}>
        {codeComments.map((comment, index) => {
          // Calculate position to favor sides
          const isLeftSide = index % 2 === 0;
          const xPosition = isLeftSide 
            ? Math.random() * 25 + 5  // 5% to 30% for left side
            : Math.random() * 25 + 60; // 70% to 95% for right side
            
          return (
            <div 
              key={index} 
              className={styles.codeComment} 
              style={{ 
                animationDelay: `${index * 0.7}s`,
                top: `${Math.random() * 80 + 10}%`,
                left: `${xPosition}%`,
                opacity: 0.15 + (Math.random() * 0.1) // Increased opacity for better visibility
              }}
            >
              {comment}
            </div>
          );
        })}
      </div>
      
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        
        {/* TypeWriter effect */}
        <TypeWriter />

        {/* Split layout for About Me and buttons */}
        <div className={styles.heroSplitLayout}>
          <div className={styles.heroLeftSection}>
            <AboutMeSection />
          </div>
          
          <div className={styles.heroRightSection}>
            <div className={styles.mainActions}>
              <div className={styles.portfolioButtons}>
                <Link
                  className={`${styles.btnBorderToLine} ${styles.btnBorderToLineText} ${styles.btnPrimary}`}
                  to="/projects"
                >
                  <svg className={styles.btnBorder} xmlns="http://www.w3.org/2000/svg">
                    <rect height="100%" width="100%" />
                  </svg>
                  <svg className={styles.portfolioButtonIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/>
                    <path d="M8 14h3v3h2v-3h3v-2h-3V9h-2v3H8z"/>
                  </svg>
                  My Projects
                </Link>
                <Link
                  className={`${styles.btnBorderToLine} ${styles.btnBorderToLineText} ${styles.btnPrimary}`}
                  to="/skills"
                >
                  <svg className={styles.btnBorder} xmlns="http://www.w3.org/2000/svg">
                    <rect height="100%" width="100%" />
                  </svg>
                  <svg className={styles.portfolioButtonIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                  My Skills
                </Link>
                <Link
                  className={`${styles.btnBorderToLine} ${styles.btnBorderToLineText} ${styles.btnPrimary} ${styles.educationButton}`}
                  to="/educations"
                >
                  <svg className={styles.btnBorder} xmlns="http://www.w3.org/2000/svg">
                    <rect height="100%" width="100%" />
                  </svg>
                  <svg className={styles.portfolioButtonIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                  My Education
                </Link>
              </div>
              
              <div className={styles.wikiSection}>
                <button 
                  onClick={() => setShowWiki(!showWiki)}
                  className={`${styles.wikiToggle} ${showWiki ? styles.wikiToggleActive : ''}`}
                >
                  <span>Documentation & Resources</span>
                  <svg className={styles.wikiToggleIcon} width="12" height="12" viewBox="0 0 12 12">
                    <path fill="currentColor" d={showWiki ? 
                      "M10.293 7.293L6 3 1.707 7.293a1 1 0 001.414 1.414L6 5.828l2.879 2.879a1 1 0 001.414-1.414z" :
                      "M1.707 4.707L6 9l4.293-4.293a1 1 0 00-1.414-1.414L6 6.172 3.121 3.293a1 1 0 00-1.414 1.414z"
                    }/>
                  </svg>
                </button>
                
                <div className={`${styles.wikiButtonsContainer} ${showWiki ? styles.wikiButtonsActive : ''}`}>
                  <Link
                    className={`${styles.btnBorderToLine} ${styles.btnBorderToLineText} ${styles.btnSecondary} margin-right--md margin-bottom--md`}
                    to="/nixos"
                  >
                    <svg className={styles.btnBorder} xmlns="http://www.w3.org/2000/svg">
                      <rect height="100%" width="100%" />
                    </svg>
                    My NixOS Wiki
                  </Link>
                  <Link
                    className={`${styles.btnBorderToLine} ${styles.btnBorderToLineText} ${styles.btnSecondary} margin-right--md margin-bottom--md`}
                    to="/dev"
                  >
                    <svg className={styles.btnBorder} xmlns="http://www.w3.org/2000/svg">
                      <rect height="100%" width="100%" />
                    </svg>
                    My Developer Wiki
                  </Link>
                  <Link
                    className={`${styles.btnBorderToLine} ${styles.btnBorderToLineText} ${styles.btnSecondary} margin-bottom--md`}
                    to="/docs/intro"
                  >
                    <svg className={styles.btnBorder} xmlns="http://www.w3.org/2000/svg">
                      <rect height="100%" width="100%" />
                    </svg>
                    Other Wiki
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Portfolio`}
      description="Cyber-Syntax's personal portfolio and wiki site"
    >
      <main className={styles.homepage}>
        <HomepageHeader />
        <div className={styles.featureSection}>
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
