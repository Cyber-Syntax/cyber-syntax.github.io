import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import React, { useState, useEffect, useRef } from 'react';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import solid icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// Import brand icons
import { faGithub, faMastodon, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// Animated code comments that display in the background
const codeComments = [
  "console.log('passionate about Linux and system administration');", // JavaScript
  "print('proficient in Python')", // Python
  "puts 'experienced with git-based development workflows'", // Ruby
  "echo 'constantly learning';", // PHP
  "printf(\"familiar with web development technologies\\n\");", // C
  "System.out.println(\"background in MIS\");", // Java
  "fmt.Println(\"always exploring new Linux distributions\")", // Go
  "print(\"committed to continuous improvement\")", // Swift
  "Console.WriteLine(\"open source advocate\");", // C#
  "println(\"problem solver\")", // Kotlin
  "putStrLn \"developer & system administrator\"", // Haskell
  "echo 'Bash shell output'", // Bash
  "print \"Perl: script starting\\n\";", // Perl
  "cat('Linux is my enthusiast\\n')", // R
  "println(\"I love open source\")", // Scala
  "IO.puts \"Hello, World!\"", // Elixir
  "std::cout << \"Hello, World!\" << std::endl;", // C++
  "Write-Output 'nix-env -iA nixpkgs.hello'", // PowerShell
  "println!(\"sudo apt install hello\");", // Rust
  "print('sudo dnf install hello')", // Lua
  "sudo pacman -S hello",
  "nix-rebuild",
  "console.log('Linux Enthusiast');", // TypeScript
  "printfn \"Open Source Advocate\"" // F#
];

// Typing effect phrases
const typingPhrases = [
  "Linux Enthusiast",
  "Open Source Advocate",
  "Problem Solver",
  "Continuous Learner",
  "Developer & System Administrator"
];

// Social media links with proper icons
const socialMediaLinks = [
  { name: "GitHub", icon: faGithub, url: "https://github.com/cyber-syntax" },
  { name: "Mastodon", icon: faMastodon, url: "https://mastodon.social/@priv4cy" },
  { name: "Twitter/X", icon: faXTwitter, url: "https://x.com/cyb_serif" },
  // { name: "Email", icon: faEnvelope, url: "mailto:contact@example.com" },
];

// Core skills for About Me section with icons
const coreSkills = [
  { name: "Linux", icon: "fab fa-linux" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Fedora", icon: "fab fa-fedora" }, 
  { name: "System Administration", icon: "fas fa-server" },
  { name: "Shell Scripting", icon: "fas fa-terminal" }, 
  { name: "Web Development", icon: "fas fa-code" },
  { name: "CI/CD", icon: "fas fa-sync-alt" },
  { name: "Automation", icon: "fas fa-cogs" }
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
        <div className={styles.aboutMeHeaderContent}>
          <img 
            src="https://github.com/cyber-syntax.png" 
            alt="Profile" 
            className={styles.profilePicture}
          />
          <h2 className={styles.aboutMeTitle}>
            About Me
            <span className={styles.aboutMeSubtitle}>Developer & System Administrator</span>
          </h2>
        </div>
      </div>
      
      <div className={styles.aboutMeBody}>
        <div className={styles.aboutMeContent}>
          <p>
            I'm passionate about Linux and system administration with a drive for continuous learning and improvement.
          </p>
          <p>
            I love automation with Python and shell scripting.
           </p> 
          <p>
            I'm always exploring new technologies and tools to enhance my skill set.
          </p>
        </div>
      </div>
      
      <div className={styles.socialMediaContainer}>
        {socialMediaLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url} 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialMediaLink}
            aria-label={social.name}
          >
            <FontAwesomeIcon icon={social.icon} />
            <span className={styles.socialMediaText}>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundComments}>
        {codeComments.map((comment, index) => {
          // Calculate position to favor sides
          const isLeftSide = index % 2 === 0;
          const xPosition = isLeftSide 
            ? Math.random() * 11 // 5% to 30% for left side
            : Math.random() * 25 + 60; // 70% to 95% for right side
            
          return (
            <div 
              key={index} 
              className={styles.codeComment} 
              style={{ 
                animationDelay: `${index * 1.1}s`,
                top: `${Math.random() * 80 }%`,
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

        {/* Full-width About Me section */}
        <div className={styles.fullWidthSection}>
          <AboutMeSection />
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
