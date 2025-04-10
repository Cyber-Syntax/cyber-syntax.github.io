import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "../css/portfolio/portfolio.css";

//Typescript projects section
interface Project {
  id: string;
  title: string;
  link: string;
  owner: string;
  date: string;
  description: string;
  tags: string[];
  category: string[];
}

const projects: Project[] = [
  {
    id: "super-productivity",
    title: "🏆 super-productivity",
    link: "https://github.com/Cyber-Syntax/super-productivity",
    owner: "Contributor",
    date: "May 2023 - Present",
    description: "Contributed as a translator for the Turkish language.",
    tags: ["translation"],
    category: ["all", "project-contribution"],
  },
  {
    id: "autotarcompress",
    title: "🚀 AutoTarCompress",
    link: "https://github.com/Cyber-Syntax/AutoTarCompress",
    owner: "Owner",
    date: "Apr 2023 - Present",
    description:
      "The script compresses specific directories into tar files. I needed to back up my important files to the cloud. Therefore, I wrote this script to backup and encrypt them. Additionally, I have made some enhancements such as decryption, encryption, and creating tar files.",
    tags: ["python"],
    category: ["all", "python"],
  },
  {
    id: "my-unicorn",
    title: "🦄 my-unicorn",
    link: "https://github.com/Cyber-Syntax/my-unicorn",
    owner: "Owner",
    date: "March 2023 - Present",
    description:
      "I created a script to automate the installation and updating some of Appimage apps. Script creating a JSON file to easily add app versions, choices, names, and repository details, making it user-friendly for installation automation.",
    tags: ["python"],
    category: ["all", "python"],
  },
  {
    id: "sink-change",
    title: "🚧 sink-change",
    link: "https://github.com/Cyber-Syntax/dot-files/blob/bare-repo/.config/qtile/scripts/sink-change.sh",
    owner: "Owner",
    date: "March 2023 - Present",
    description:
      "I wrote this script to adjust the sound output and display the volume in my window managers. It represents my first foray into bash scripting as I explore this new skill.",
    tags: ["bash"],
    category: ["all", "bash"],
  },
  {
    id: "fedora-setup",
    title: "🐚 fedora-setup",
    link: "https://github.com/Cyber-Syntax/fedora-setup",
    owner: "Owner",
    date: "March 2025 - Present",
    description:
      "Bash script for fedora setup. It setup the fedora system with most useful apps, configurations. For example, grub timeout 0 configuration, installing apps, and setting up the system.",
    tags: ["bash"],
    category: ["all", "bash"],
  },
  {
    id: "WallpaperChanger",
    title: "🛸 WallpaperChanger",
    link: "https://github.com/Cyber-Syntax/WallpaperChanger",
    owner: "Owner",
    date: "March 2023 - Present",
    description:
      "This script changes the wallpaper based on the time of day. I have set wallpapers for my workdays and days off. During the midweek, the script changes my wallpaper to the designated workday wallpapers. On Sundays, the script switches to my day off wallpapers.",
    tags: ["python"],
    category: ["all", "python"],
  },
  {
    id: "siyuan-appimage-update",
    title: "🌟 siyuan-appimage-update",
    link: "https://github.com/Cyber-Syntax/siyuan-appimage-update",
    owner: "Owner",
    date: "Jan 2023 - Feb 2023",
    description:
      "It’s installing latest siyuan app version and verifying sha256.",
    tags: ["python"],
    category: ["all", "python", "archived"],
  },
  {
    id: "superProductivity-appimage-update",
    title: "🌟 superProductivity-appimage-update",
    link: "https://github.com/Cyber-Syntax/superProductivity-appimage-update",
    owner: "Owner",
    date: "Feb 2023 - Feb 2023",
    description:
      "It’s installing latest superProductivity app version and verifying sha512.",
    tags: ["python"],
    category: ["all", "python", "archived"],
  },
  {
    id: "find_final_grade",
    title: "💯 find_final_grade",
    link: "https://github.com/Cyber-Syntax/find_final_grade",
    owner: "Owner",
    date: "Jan 2023 - Jan 2025",
    description:
      "Created a Python script to determine how much grade I need to achieve on my final exam to pass my lesson, based on the mid-term score.",
    tags: ["python"],
    category: ["all", "python", "archived"],
  },
  {
    id: "dnf-update-status",
    title: "👒 dnf-update-status",
    link: "https://github.com/Cyber-Syntax/dot-files/blob/main/.config/waybar/dnf-update-status.py",
    owner: "Owner",
    date: "Feb 2024 - Feb 2024",
    description:
      "Developed a Python script to monitor and display newly updated packages on the Fedora Linux distribution.",
    tags: ["python"],
    category: ["all", "python", "archived"],
  },
];

function ProjectPage() {
  const [activeFilter, setActiveFilter] = React.useState<string>("all");
  const [displayedProjects, setDisplayedProjects] = React.useState<Project[]>([]);
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const filtered = projects.filter((project) =>
      activeFilter === "all" ? true : project.category.includes(activeFilter)
    );
    setDisplayedProjects(filtered);
    // Reset expanded state when filter changes
    setExpandedCards({});
  }, [activeFilter]);

  const toggleCardExpansion = (projectId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <Layout title="Projects" description="My projects">
      <main className="container">
        <section className="portfolio-section">
          <div className="portfolio-header">
            <h1 className="portfolio-title">My Projects</h1>
            <p className="portfolio-subtitle">
              A collection of projects I've worked on
            </p>
          </div>

          <div className="portfolio-tabs">
            {[
              "all",
              "python",
              "bash",
              "project-contribution",
              "archived",
            ].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`portfolio-tab ${activeFilter === filter ? 'portfolio-tab-active' : ''}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-header">
                  <h3 className="card-title" title={project.title}>
                    {project.title}
                  </h3>
                  <div className="card-meta">
                    <span>{project.owner}</span>
                    <span>{project.date}</span>
                  </div>
                </div>

                <div className="card-body">
                  <p className={`card-description ${expandedCards[project.id] ? 'expanded' : ''}`}>
                    {project.description}
                  </p>
                  {project.description.length > 150 && (
                    <button 
                      className="show-more-button" 
                      onClick={() => toggleCardExpansion(project.id)}
                    >
                      {expandedCards[project.id] ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                  <div className="card-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary button--outline"
                  >
                    Discover Project
                  </a>
                </div>
              </div>
            ))}
            {displayedProjects.length === 0 && (
              <div className="text--center" style={{ gridColumn: "1 / -1", padding: "2rem" }}>
                No projects found for this filter.
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProjectPage;
