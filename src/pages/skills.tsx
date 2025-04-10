import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "../css/portfolio/portfolio.css";

//Typescript skills section
interface Skill {
  id: string;
  title: string;
  description: string;
  category: string[];
}

const skills: Skill[] = [
  {
    id: "linux",
    title: "🐧 Linux",
    description:
      "He knows the most commonly used terminal commands and can troubleshoot common issues. He is passionate about Linux and eager to enhance his knowledge of it. He has several years of experience using Linux as his main operating system.",
    category: ["all", "sysadmin"],
  },
  {
    id: "python",
    title: "🚀 Python",
    description:
      "Proficient in writing scripts, continuously enhancing my skills. Enthusiastic about utilizing Python to solve problems and automate repetitive tasks.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "bash",
    title: "🦄 Bash",
    description:
      "Fundamental knowledge of coding with the ability to utilize internet resources and AI assistance for problem-solving and code implementation.",
    category: ["all", "sysadmin"],
  },
  {
    id: "git",
    title: "🚧 Git",
    description:
      "I have experience with git-based development, primarily using GitHub. I learned Git when I needed to create Python scripts to solve problems. While I am still learning, I have a solid understanding of fundamental Git CLI usage.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "web-development",
    title: "🛸 Web Development",
    description:
      "Familiar with HTML and CSS, with introductory exposure to PHP; constructed a simple website using these technologies. I also developed websites using WordPress, Joomla, Hugo, Jeckly and Docusaurus.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "sql",
    title: "🌟 SQL",
    description: "Mastered fundamentals with school curriculum.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "cpp",
    title: "🌟 C++",
    description: "Acquired fundamental knowledge through school curriculum.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "cloud",
    title: "🌟 Cloud Computing",
    description:
      "I set up Fedora Server on my old laptop. I set up Nextcloud on a Fedora Server manually by configuring PHP, MySQL, and essential components.",
    category: ["all", "sysadmin"],
  },
];

function SkillPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const filtered = skills.filter((skill) =>
      activeFilter === "all" ? true : skill.category.includes(activeFilter)
    );
    setDisplayedSkills(filtered);
  }, [activeFilter]);

  return (
    <Layout title="Skills" description="My skills">
      <main className="container">
        <section className="portfolio-section">
          <div className="portfolio-header">
            <h1 className="portfolio-title">My Skills</h1>
            <p className="portfolio-subtitle">
              Technical competencies I've developed
            </p>
          </div>

          <div className="portfolio-tabs">
            {["all", "sysadmin", "developer"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`portfolio-tab ${activeFilter === filter ? 'portfolio-tab-active' : ''}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {displayedSkills.map((skill, index) => (
              <div 
                key={skill.id}
                className="skill-card"
                style={{ '--animation-order': index } as React.CSSProperties}
              >
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
            {displayedSkills.length === 0 && (
              <div className="text--center" style={{ gridColumn: "1 / -1", padding: "2rem" }}>
                No skills found for this filter.
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default SkillPage;
