import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "../../css/portfolio/portfolio.css";

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
    owner: "Katkıda Bulunan",
    date: "Mayıs 2023 - Günümüz",
    description: "Türkçe dili için çevirmen olarak katkıda bulundum.",
    tags: ["çeviri"],
    category: ["all", "project-contribution"],
  },
  {
    id: "autotarcompress",
    title: "🚀 AutoTarCompress",
    link: "https://github.com/Cyber-Syntax/AutoTarCompress",
    owner: "Sahibi",
    date: "Nisan 2023 - Günümüz",
    description:
      "Bu script belirli dizinleri tar dosyalarına sıkıştırır. Önemli dosyalarımı buluta yedeklemem gerekiyordu. Bu yüzden bu scripti yedeklemek ve şifrelemek için yazdım. Ayrıca şifre çözme, şifreleme ve tar dosyaları oluşturma gibi bazı geliştirmeler yaptım.",
    tags: ["python"],
    category: ["all", "python"],
  },
  {
    id: "my-unicorn",
    title: "🦄 my-unicorn",
    link: "https://github.com/Cyber-Syntax/my-unicorn",
    owner: "Sahibi",
    date: "Mart 2023 - Günümüz",
    description:
      "Bazı Appimage uygulamalarının kurulumunu ve güncellenmesini otomatikleştirmek için bir script oluşturdum. Script, kurulum otomasyonu için kullanıcı dostu hale getirerek uygulama sürümlerini, seçenekleri, adları ve depo detaylarını kolayca eklemek için bir JSON dosyası oluşturuyor.",
    tags: ["python"],
    category: ["all", "python"],
  },
  {
    id: "sink-change",
    title: "🚧 sink-change",
    link: "https://github.com/Cyber-Syntax/dot-files/blob/bare-repo/.config/qtile/scripts/sink-change.sh",
    owner: "Sahibi",
    date: "Mart 2023 - Günümüz",
    description:
      "Pencere yöneticilerimde ses çıkışını ayarlamak ve ses seviyesini görüntülemek için bu scripti yazdım. Bu, bu yeni beceriyi keşfederken bash scriptlemeye ilk girişimi temsil ediyor.",
    tags: ["bash"],
    category: ["all", "bash"],
  },
  {
    id: "fedora-setup",
    title: "🐚 fedora-setup",
    link: "https://github.com/Cyber-Syntax/fedora-setup",
    owner: "Sahibi",
    date: "Mart 2025 - Günümüz",
    description:
      "Fedora kurulumu için bash scripti. Fedora sistemini en kullanışlı uygulamalar ve yapılandırmalarla kurar. Örneğin, grub zaman aşımı 0 yapılandırması, uygulamaların kurulumu ve sistemin ayarlanması.",
    tags: ["bash"],
    category: ["all", "bash"],
  },
  {
    id: "WallpaperChanger",
    title: "🛸 WallpaperChanger",
    link: "https://github.com/Cyber-Syntax/WallpaperChanger",
    owner: "Sahibi",
    date: "Mart 2023 - Günümüz",
    description:
      "Bu script, günün saatine göre duvar kağıdını değiştirir. İş günlerim ve tatil günlerim için duvar kağıtları ayarladım. Hafta ortasında, script duvar kağıdımı belirlenen iş günü duvar kağıtlarına değiştirir. Pazar günleri, script tatil günü duvar kağıtlarıma geçer.",
    tags: ["python"],
    category: ["all", "python"],
  },
  {
    id: "siyuan-appimage-update",
    title: "🌟 siyuan-appimage-update",
    link: "https://github.com/Cyber-Syntax/siyuan-appimage-update",
    owner: "Sahibi",
    date: "Ocak 2023 - Şubat 2023",
    description:
      "En son siyuan uygulama sürümünü kurar ve sha256'yı doğrular.",
    tags: ["python"],
    category: ["all", "python", "archived"],
  },
  {
    id: "superProductivity-appimage-update",
    title: "🌟 superProductivity-appimage-update",
    link: "https://github.com/Cyber-Syntax/superProductivity-appimage-update",
    owner: "Sahibi",
    date: "Şubat 2023 - Şubat 2023",
    description:
      "En son superProductivity uygulama sürümünü kurar ve sha512'yi doğrular.",
    tags: ["python"],
    category: ["all", "python", "archived"],
  },
  {
    id: "find_final_grade",
    title: "💯 find_final_grade",
    link: "https://github.com/Cyber-Syntax/find_final_grade",
    owner: "Sahibi",
    date: "Ocak 2023 - Ocak 2025",
    description:
      "Vize sınav notuna dayanarak final sınavımda dersimi geçmek için ne kadar not almam gerektiğini belirlemek için bir Python scripti oluşturdum.",
    tags: ["python"],
    category: ["all", "python", "archived"],
  },
  {
    id: "dnf-update-status",
    title: "👒 dnf-update-status",
    link: "https://github.com/Cyber-Syntax/dot-files/blob/main/.config/waybar/dnf-update-status.py",
    owner: "Sahibi",
    date: "Şubat 2024 - Şubat 2024",
    description:
      "Fedora Linux dağıtımında yeni güncellenen paketleri izlemek ve görüntülemek için bir Python scripti geliştirdim.",
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
    <Layout title="Projeler" description="Projelerim">

      <main className="container">
        <section className="portfolio-section">
          <div className="portfolio-header">
            <h1 className="portfolio-title">Projelerim</h1>
            <p className="portfolio-subtitle">
              Üzerinde çalıştığım projelerin bir koleksiyonu
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
                {filter === "all" ? "Tümü" : 
                 filter === "project-contribution" ? "Proje Katkıları" :
                 filter === "archived" ? "Arşivlenmiş" : 
                 filter.charAt(0).toUpperCase() + filter.slice(1)}
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
                      {expandedCards[project.id] ? 'Daha Az Göster' : 'Daha Fazla Göster'}
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
                    Projeyi Keşfet
                  </a>
                </div>
              </div>
            ))}
            {displayedProjects.length === 0 && (
              <div className="text--center" style={{ gridColumn: "1 / -1", padding: "2rem" }}>
                Bu filtre için proje bulunamadı.
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProjectPage;