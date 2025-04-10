import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "../../css/portfolio/portfolio.css";

//Typescript education section
interface Education {
  id: string;
  title: string;
  date: string;
  category: string[];
  taken_courses: string[];
  extracurricular_activities: string[];
}

const educations: Education[] = [
  {
    id: "Anadolu Üniversitesi",
    category: ["all", "bachelor"],
    date: "2022-2025",
    title: "Yönetim Bilişim Sistemleri Lisans Eğitimi Devam Ediyor",
    taken_courses: [
      "İleri Programlama",
      "Veritabanı Programlama",
      "İnternet ve Web Programlama",
      "Programlamada Yeni Eğilimler",
      "Veritabanı Sistemleri",
      "Sosyal Ağ Analizi",
      "Veri Madenciliği",
      "Proje Yönetimi",
      "Kullanıcı Deneyimi Tasarımı",
      "Kurumsal Kaynak Planlama Sistemleri",
      "Sistem Analizi ve Tasarımı",
      "Süreç Tablosu Programlama",
      "Üretim Yönetimi",
      "Dijital Dönüşüm",
      "Marka ve Yönetim",
      "Örgütsel Davranış",
      "Ağ Yönetimi ve Bilgi Güvenliği",
      "Girişimcilik ve İş Kurma",
      "İnovasyon Yönetimi",
      "Yöneylem Araştırması",
      "Karar Modelleri",
      "Finansal Tablolar Analizi",
      "Müşteri İlişkileri Yönetimi",
      "Karar Destek Sistemleri",
    ],
    extracurricular_activities: [
      "İngilizce yeterliliğimi orta seviyeden akıcı seviyeye yükselttim.",
      "CS50'nin Python ile Programlamaya Giriş kursunu tamamladım.",
      "Otomasyon ve problem çözme becerilerini geliştirmek için Python ve Bash betikleri geliştirdim.",
      "Ağ konusundaki bilgilerimi genişlettim.",
      "Cybermentor'un 'Sıfırdan Uzmanlığa' kursuna katılarak ağ penetrasyon testleri ve temel siber güvenlik ilkeleri konusunda bilgi edindim.",
      "Neredeyse dört yıldır ana işletim sistemi olarak Linux kullanarak, çok sayıda Linux ile ilgili sorunu başarıyla çözdüm ve çeşitli Linux dağıtımlarını keşfettim.",
      "Linux uzmanlığımı genişletmek için Gentoo, Arch, Debian, NixOS ve Fedora konusunda bilgi edindim ve Fedora ve Arch'ta önemli ilerleme kaydettim.",
    ],
  },
  {
    id: "Namık Kemal Üniversitesi",
    category: ["all", "associate"],
    date: "2019-2021",
    title: "Bilgisayar Programcılığı Ön Lisans Derecesi",
    taken_courses: [
      "Bilgisayar Donanımı",
      "Nesne Yönelimli Programlama",
      "Veri Yapıları ve Programlama",
      "Veritabanı",
      "Yapay Sinir Ağları",
      "Sistem Programlama",
      "İnternet Programlama",
      "Sistem Analizi ve Tasarımı",
      "Görsel Programlama",
      "Mesleki Yabancı Dil (İngilizce)",
      "Matematik",
      "Atatürk İlkeleri ve Türk İnkılap Tarihi",
      "Türk Dili",
    ],
    extracurricular_activities: [
      "SQL'in temellerini öğrendim ve ödev çalışmalarıyla pratik yaptım.",
      "VMware ve Virtualbox üzerinde Linux sanallaştırmanın temellerini öğrendim.",
      "Web geliştirmenin temellerini öğrendim; HTML, CSS ve PHP. Ayrıca Joomla ve WordPress kullanma konusunda yetkinlik kazandım.",
      "Programlama dillerinin nasıl çalıştığını ve bilgisayar programlamadaki temel süreçleri öğrendim.",
      "Temizlik ve termal macun uygulaması dahil olmak üzere masaüstü ve dizüstü bilgisayar bakımını öğrendim.",
    ],
  },
];

function EducationPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [displayedEducation, setDisplayedEducation] = useState<Education[]>([]);

  useEffect(() => {
    const filtered = educations.filter((education) =>
      activeFilter === "all" ? true : education.category.includes(activeFilter)
    );
    setDisplayedEducation(filtered);
  }, [activeFilter]);

  return (
    <Layout title="Eğitim" description="Eğitimim">
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
              Eğitim
            </span>
            <meta itemProp="position" content="1" />
          </li>
        </ul>
      </nav>

      <main className="container">
        <section className="portfolio-section">
          <div className="portfolio-header">
            <h1 className="portfolio-title">Eğitimim</h1>
            <p className="portfolio-subtitle">
              Akademik yolculuğum ve niteliklerim
            </p>
          </div>

          <div className="portfolio-tabs">
            {["all", "associate", "bachelor"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`portfolio-tab ${activeFilter === filter ? 'portfolio-tab-active' : ''}`}
              >
                {filter === "all" ? "Tümü" : filter === "associate" ? "Ön Lisans" : "Lisans"}
              </button>
            ))}
          </div>

          <div className="education-timeline">
            {displayedEducation.map((education, index) => (
              <div
                key={education.id}
                className={`education-item ${
                  index % 2 === 0 ? 'education-item-left' : 'education-item-right'
                }`}
                style={{ '--animation-order': index } as React.CSSProperties}
              >
                <div className="education-item-content">
                  <h3 className="education-title">{education.title}</h3>
                  <div className="education-meta">
                    <span className="education-degree">{education.id}</span>
                    <span className="education-date">{education.date}</span>
                  </div>

                  <div className="education-details">
                    <h4 className="education-section-title">Alınan Dersler</h4>
                    <ul className="education-list">
                      {education.taken_courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="education-list-item">
                          {course.trim()}
                        </li>
                      ))}
                    </ul>

                    <div className="education-activities">
                      <h4 className="education-section-title">Ders Dışı Etkinlikler</h4>
                      {education.extracurricular_activities.map((activity, activityIndex) => (
                        <p key={activityIndex} className="education-list-item" style={{ marginBottom: '0.5rem' }}>
                          {activity.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {displayedEducation.length === 0 && (
              <div className="text--center" style={{ padding: "2rem" }}>
                Bu filtre için eğitim bilgisi bulunamadı.
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default EducationPage;