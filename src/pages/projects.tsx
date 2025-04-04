import React from "react";
//import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout"; // Import the Layout component
//import Link from "@docusaurus/Link"; // Docusaurus Link for navigation
//import "bootstrap/scss/bootstrap.scss"; // Include the full Bootstrap SCSS (optional)
//import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS

// Custom styles
//import styles from "./../components/HomepageFeatures/styles.module.css";
import styles from "./../css/custom.css";

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
  // Add more project objects as necessary...
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
  //const { siteConfig } = useDocusaurusContext();
  const [activeFilter, setActiveFilter] = React.useState<string>("all");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category.includes(activeFilter),
  );

  return (
    <Layout title="Projects" description="My projects">
      <nav
        className="theme-doc-breadcrumbs breadcrumbsContainer_Z_bl"
        aria-label="Breadcrumbs"
      >
        <ul
          className="breadcrumbs padding--lg"
          itemScope={true}
          itemType="https://schema.org/BreadcrumbList"
        >
          <li className="breadcrumbs__item">
            <a aria-label="Home page" className="breadcrumbs__link" href="/">
              <svg viewBox="0 0 24 24" className="breadcrumbHomeIcon_YNFT">
                <path
                  d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </li>
          <li
            itemScope={true}
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="breadcrumbs__item breadcrumbs__item--active"
          >
            <span className="breadcrumbs__link" itemProp="name">
              Projects
            </span>
            <meta itemProp="position" content="1" />
          </li>
        </ul>
      </nav>

      <main className="container">
        <section>
          <div className="tabs-container " id="projects">
            <ul role="tablist" aria-orientation="horizontal" itemScope={true}>
              {[
                "all",
                "python",
                "bash",
                "project-contribution",
                "archived",
              ].map((filter) => (
                <li
                  key={filter}
                  role="tab"
                  tabIndex={activeFilter === filter ? 0 : -1}
                  aria-selected={activeFilter === filter}
                  className={`tabs__item tabItem_1uMI ${
                    activeFilter === filter ? "tabs__item--active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </li>
              ))}
            </ul>

            <div className="container filtr-projects margin-top--lg">
              <div className="row list_eTzJ" id="project-card-holder">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="col col--6 margin-bottom--lg filtr-item"
                    data-category={project.category}
                  >
                    <div className="item shadow--tl card">
                      <div className="card__header">
                        <h3
                          className="text--truncate cardTitle_dwRT"
                          title="Pages"
                        >
                          {project.title}
                        </h3>
                        <div className="pagination-nav docusaurus-mt-md">
                          <a className="text--left">{project.owner}</a>
                          <a className="text--right">{project.date}</a>
                        </div>
                      </div>

                      <div className="card__body">
                        <div className="sub-title">
                          <p>{project.description}</p>
                          <div className="project-tags-holder badge badge--primary">
                            {project.tags.map((tag, idx) => (
                              <span key={idx} className="">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className="card__footer row docusaurus-mt-md
                      "
                      >
                        <div className="col col--9">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button--primary button--outline button--lg"
                          >
                            <span className="button__icon"></span>
                            Discover
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredProjects.length === 0 && (
                  <div className="col-12 text-center">
                    No projects found for this filter.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProjectPage;
