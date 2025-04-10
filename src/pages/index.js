import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import React, { useState } from 'react';

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

        <div className={styles.mainActions}>
          <div className={styles.portfolioButtons}>
            <Link
              className="button button--primary button--lg margin-right--md margin-bottom--md"
              to="/projects"
            >
              My Projects
            </Link>
            <Link
              className="button button--primary button--lg margin-right--md margin-bottom--md"
              to="/skills"
            >
              My Skills
            </Link>
            <Link
              className="button button--primary button--lg margin-bottom--md"
              to="/educations"
            >
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
                className="button button--secondary button--lg padding-horiz--md margin-right--md margin-bottom--md"
                to="/nixos"
              >
                My NixOS Wiki
              </Link>
              <Link
                className="button button--secondary button--lg padding-horiz--md margin-right--md margin-bottom--md"
                to="/dev"
              >
                My Developer Wiki
              </Link>
              <Link
                className="button button--secondary button--lg padding-horiz--md margin-bottom--md"
                to="/docs/intro"
              >
                Other Wiki
              </Link>
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
