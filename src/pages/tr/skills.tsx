import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "../../css/portfolio/portfolio.css";

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
      "En sık kullanılan terminal komutlarını bilir ve yaygın sorunları giderebilir. Linux'a tutkuyla bağlıdır ve bilgisini artırmaya heveslidir. Ana işletim sistemi olarak Linux'u birkaç yıldır kullanmaktadır.",
    category: ["all", "sysadmin"],
  },
  {
    id: "python",
    title: "🚀 Python",
    description:
      "Script yazmada uzmanlaşmış, becerilerini sürekli geliştiriyor. Sorunları çözmek ve tekrarlayan görevleri otomatikleştirmek için Python kullanmaya hevesli.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "bash",
    title: "🦄 Bash",
    description:
      "Problem çözme ve kod uygulama için internet kaynaklarını ve yapay zeka desteğini kullanma becerisiyle temel kodlama bilgisine sahiptir.",
    category: ["all", "sysadmin"],
  },
  {
    id: "git",
    title: "🚧 Git",
    description:
      "Git tabanlı geliştirmede deneyimim var, öncelikle GitHub kullanıyorum. Git'i sorunları çözmek için Python betikleri oluşturmam gerektiğinde öğrendim. Hala öğrenmeye devam ederken, temel Git CLI kullanımı konusunda sağlam bir anlayışa sahibim.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "web-development",
    title: "🛸 Web Geliştirme",
    description:
      "HTML ve CSS'ye aşina, PHP'ye giriş seviyesinde deneyim; bu teknolojileri kullanarak basit bir web sitesi oluşturdum. Ayrıca WordPress, Joomla, Hugo, Jeckly ve Docusaurus kullanarak web siteleri geliştirdim.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "sql",
    title: "🌟 SQL",
    description: "Okul müfredatı ile temelleri öğrendim.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "cpp",
    title: "🌟 C++",
    description: "Okul müfredatı ile temel bilgileri edindim.",
    category: ["all", "sysadmin", "developer"],
  },
  {
    id: "cloud",
    title: "🌟 Bulut Bilişim",
    description:
      "Eski dizüstü bilgisayarımda Fedora Server kurdum. PHP, MySQL ve temel bileşenleri yapılandırarak Fedora Server üzerinde Nextcloud'u manuel olarak kurdum.",
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
    <Layout title="Beceriler" description="Becerilerim">
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
            <a aria-label="Ana sayfa" className="breadcrumbs__link" href="/">
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
              Beceriler
            </span>
            <meta itemProp="position" content="1" />
          </li>
        </ul>
      </nav>

      <main className="container">
        <section className="portfolio-section">
          <div className="portfolio-header">
            <h1 className="portfolio-title">Becerilerim</h1>
            <p className="portfolio-subtitle">
              Geliştirdiğim teknik yetkinlikler
            </p>
          </div>

          <div className="portfolio-tabs">
            {["all", "sysadmin", "developer"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`portfolio-tab ${activeFilter === filter ? 'portfolio-tab-active' : ''}`}
              >
                {filter === "all" ? "Tümü" : 
                 filter === "sysadmin" ? "Sistem Yönetimi" : 
                 filter === "developer" ? "Geliştirici" : 
                 filter.charAt(0).toUpperCase() + filter.slice(1)}
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
                Bu filtre için beceri bulunamadı.
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default SkillPage;