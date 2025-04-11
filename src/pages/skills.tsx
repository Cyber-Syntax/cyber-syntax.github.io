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
      "I'm familiar with commonly used terminal commands and can troubleshoot typical issues. I'm passionate about Linux and eager to enhance my knowledge. I've been using Linux as my main operating system for several years.",
    category: ["all", "sysadmin"],
  },
  {
    id: "python",
    title: "🚀 Python",
    description:
      "I'm proficient in writing scripts and continuously enhancing my skills. I'm enthusiastic about using Python to solve problems and automate repetitive tasks.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "bash",
    title: "🦄 Bash",
    description:
      "I have fundamental knowledge of coding with the ability to leverage internet resources and AI assistance for problem-solving and code implementation. I am actively learning Bash scripting to automate tasks and improve my workflow.",
    category: ["all", "sysadmin"],
  },
  {
    id: "git",
    title: "🚧 Git",
    description:
      "I have experience with git-based development, primarily using GitHub. I learned Git when I needed to create Python scripts to solve problems. While I'm still learning, I have a solid understanding of fundamental Git CLI usage.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "web-development",
    title: "🛸 Web Development",
    description:
      "I'm familiar with HTML and CSS, with introductory exposure to PHP. I've built simple websites using these technologies and have developed sites using WordPress, Joomla, Hugo, Jekyll and Docusaurus.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "sql",
    title: "🌟 SQL",
    description: "I've acquired the fundamentals through my school curriculum.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "cpp",
    title: "🌟 C++",
    description: "I've acquired fundamental knowledge through my school curriculum.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "cloud",
    title: "🌟 Cloud Computing",
    description:
      "I set up Fedora Server on my old laptop and configured Nextcloud manually by setting up PHP, MySQL, and other essential components. I also installed and configured Nextcloud manually on Ubuntu Server in DigitalOcean.",
    category: ["all", "sysadmin"],
  },
];

function SkillPage() {
  const [_activeFilter, setActiveFilter] = useState<string>("all");
  const [_displayedSkills, setDisplayedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const filtered = skills.filter((skill) =>
      _activeFilter === "all" ? true : skill.category.includes(_activeFilter)
    );
    setDisplayedSkills(filtered);
  }, [_activeFilter]);

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
                className={`portfolio-tab ${_activeFilter === filter ? 'portfolio-tab-active' : ''}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {_displayedSkills.map((skill, index) => (
              <div 
                key={skill.id}
                className="skill-card"
                style={{ '--animation-order': index } as React.CSSProperties}
              >
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
            {_displayedSkills.length === 0 && (
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
