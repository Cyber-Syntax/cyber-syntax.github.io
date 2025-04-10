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
import { faEnvelope, faLock, faServer, faTerminal, faCode, faSyncAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
// Import brand icons
import { faGithub, faMastodon, faXTwitter, faLinux, faPython, faGitAlt, faFedora } from '@fortawesome/free-brands-svg-icons';

// Animated code comments that display in the background
const codeComments = [
  "console.log('initializing security protocols...');", 
  "print('scanning network ports')", 
  "sudo ./secure_connection.sh", 
  "chmod 700 ./encrypted_data", 
  "cat /var/log/audit/audit.log | grep VIOLATION", 
  "printf(\"breach detection system: ACTIVE\\n\");", 
  "ssh -i ~/.ssh/id_rsa user@192.168.1.10", 
  "find / -perm -4000 -user root -exec ls -l {} \\;", 
  "netstat -tulpn | grep LISTEN", 
  "tcpdump -i eth0 port 443", 
  "echo 'patching kernel vulnerabilities';", 
  "fail2ban-client status", 
  "systemctl status firewalld",
  "nmap -sS -sV -p- 192.168.1.0/24",
  "gpg --encrypt --recipient user@example.com secret.txt", 
  "journalctl -xef", 
  "iptables -A INPUT -p tcp --dport 22 -j DROP",
  "curl -s https://api.github.com/repos/cyber-syntax/cyber-syntax.github.io",
  "cat /etc/shadow | grep root", 
  "sudo systemctl restart sshd", 
  "openssl genrsa -out private.key 4096",
  "docker scan --file Dockerfile myimage:latest",
  "git log --pretty=format:\"%h - %an, %ar : %s\"", 
  "grep -r \"password\" /var/www/html/",
  // Developer commands
  "npm run build && npm start",
  "docker-compose up -d --build",
  "git checkout -b feature/new-auth-system",
  "python3 -m venv .venv && source .venv/bin/activate",
  "kubectl get pods --all-namespaces",
  "curl -X POST -H \"Content-Type: application/json\" -d '{\"key\":\"value\"}' https://api.example.com",
  "prettier --write \"src/**/*.{js,jsx,ts,tsx}\"",
  "git rebase -i HEAD~5",
  // Sysadmin commands
  "ls -la /var/log | grep error",
  "df -h | awk '$5 > 90'",
  "systemctl list-units --failed",
  "top -b -n 1 | head -20",
  "sudo lsof -i :80",
  "ps aux --sort=-%mem | head -10",
  "tail -f /var/log/nginx/access.log",
  "rsync -avz --progress /source/ /destination/",
  "find / -type f -size +100M -exec du -h {} \\; | sort -hr",
  "grep -v '^#' /etc/ssh/sshd_config"
];

// Typing effect phrases
const typingPhrases = [
  "Linux Enthusiast",
  "Open Source Advocate",
  "Developer & System Administrator",
  "Cyber Security Advocate",
  "Python Enthusiast",
  "Automation Specialist", 
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
  { name: "Linux", icon: faLinux },
  { name: "Python", icon: faPython },
  { name: "Git", icon: faGitAlt },
  { name: "Sysadmin", icon: faServer },
  { name: "Bash", icon: faTerminal }, 
  { name: "Programming", icon: faCode },
  { name: "CLI", icon: faSyncAlt },
  { name: "Automation", icon: faCogs }
];

// Enhanced TypeWriter component for typing effect with cursor
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
      <div className={styles.cyberTerminal}>
        <div className={styles.cyberTerminalHeader}>
          <span className={styles.cyberTerminalTitle}>cyber-terminal</span>
          <div className={styles.cyberTerminalButtons}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.cyberTerminalBody}>
          <span className={styles.cyberTerminalPrompt}>root@cyber-syntax:~$ </span>
          <span className={styles.typingEffect}>{text}</span>
          <span className={styles.cyberTerminalCursor}></span>
        </div>
      </div>
    </div>
  );
}

// Cyber Security Typewriter effect for About Me section without deletion
function CyberSecurityTypewriter() {
  const aboutMeParagraphs = [
    "I'm passionate about Linux and system administration with a drive for continuous learning and improvement.",
    "I love automation with Python and shell scripting.",
    "I'm always exploring new technologies and tools to enhance my skill set."
  ];
  
  const [displayedText, setDisplayedText] = useState(['', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const _typingInterval = useRef(null);
  const _glitchInterval = useRef(null);
  const [glitchText, setGlitchText] = useState('');
  
  useEffect(() => {
    if (isComplete) return;

    const typeNextChar = () => {
      if (currentIndex >= aboutMeParagraphs.length) {
        setIsComplete(true);
        return;
      }

      const currentParagraph = aboutMeParagraphs[currentIndex];
      if (currentChar < currentParagraph.length) {
        setDisplayedText(prev => {
          const newText = [...prev];
          newText[currentIndex] = currentParagraph.substring(0, currentChar + 1);
          return newText;
        });
        setCurrentChar(prevChar => prevChar + 1);
      } else {
        // Move to next paragraph
        setCurrentIndex(prevIndex => prevIndex + 1);
        setCurrentChar(0);
      }
    };

    // Random typing speed between 30ms and 70ms for a more authentic feel
    const speed = Math.floor(Math.random() * 40) + 30;
    _typingInterval.current = setTimeout(typeNextChar, speed);
    
    return () => clearTimeout(_typingInterval.current);
  }, [currentIndex, currentChar, isComplete]);

  // Occasional glitch effect
  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,./<>?`~";
    
    const applyGlitch = () => {
      // Only apply glitches when actively typing
      if (!isComplete && Math.random() > 0.7) { 
        const glitchLength = Math.floor(Math.random() * 3) + 1;
        let glitch = '';
        
        for (let i = 0; i < glitchLength; i++) {
          const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          glitch += randomChar;
        }
        
        setGlitchText(glitch);
        
        // Remove glitch after a short time
        setTimeout(() => {
          setGlitchText('');
        }, 100);
      }
    };
    
    _glitchInterval.current = setInterval(applyGlitch, 2000);
    
    return () => clearInterval(_glitchInterval.current);
  }, [isComplete]);

  return (
    <div className={styles.cyberSecurityTypewriterContainer}>
      <div className={styles.scanlines}></div>
      <div className={styles.cyberTerminalContent}>
        {displayedText.map((text, index) => (
          <p key={index} className={styles.cyberTypingParagraph}>
            <span className={styles.cyberPrompt}>&gt; </span>
            {text}
            {currentIndex === index && (
              <>
                <span className={styles.cyberGlitch}>{glitchText}</span>
                {!isComplete && <span className={styles.cyberCursor}>█</span>}
              </>
            )}
          </p>
        ))}
      </div>
      <div className={styles.cyberGlow}></div>
    </div>
  );
}

function AboutMeSection() {
  return (
    <div className={styles.aboutMeSection}>
      <div className={styles.cyberHeader}>
        <div className={styles.cyberHeaderBar}>
          <span className={styles.cyberHeaderDot}></span>
          <span className={styles.cyberHeaderDot}></span>
          <span className={styles.cyberHeaderDot}></span>
        </div>
        <div className={styles.cyberHeaderMain}>
          <div className={styles.cyberHeaderDecoration}>
            <span></span><span></span><span></span><span></span>
          </div>
          <div className={styles.cyberHeaderContent}>
            <img 
              src="https://github.com/cyber-syntax.png" 
              alt="Profile" 
              className={styles.cyberProfilePicture}
            />
            <div className={styles.cyberTitleContainer}>
              <h2 className={styles.cyberTitle}>
                <span className={styles.cyberTitlePrefix}>&lt;</span>
                About_Me
                <span className={styles.cyberTitleSuffix}>/&gt;</span>
              </h2>
              <div className={styles.cyberSubtitle}>
                <FontAwesomeIcon icon={faLock} className={styles.cyberSecurityIcon} />
                <span>Developer & System Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.aboutMeBody}>
        <CyberSecurityTypewriter />
      </div>
      
      <div className={styles.cyberSkillGrid}>
        {coreSkills.map((skill, index) => (
          <div key={index} className={styles.cyberSkillTag}>
            <FontAwesomeIcon icon={skill.icon} className={styles.cyberSkillIcon} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      
      <div className={styles.socialMediaContainer}>
        {socialMediaLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url} 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cyberSocialLink}
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
        <Heading as="h1" className={styles.cyberHeroTitle}>
          <span className={styles.cyberGlowText}>{siteConfig.title}</span>
        </Heading>
        <p className={styles.cyberHeroSubtitle}>{siteConfig.tagline || "Secure. Automate. Innovate."}</p>
        
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
      <main className={styles.cyberHomepage}>
        <HomepageHeader />
        <div className={styles.featureSection}>
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
