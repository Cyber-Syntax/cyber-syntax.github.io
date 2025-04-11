import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "../css/portfolio/portfolio.css";

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
    id: "University of Anadolu",
    category: ["all", "bachelor"],
    date: "2022-2025",
    title: "Pursuing Undergraduate Degree in Management Information Systems",
    taken_courses: [
      "Advanced Programming",
      "Database Programming",
      "Internet And Web Programming",
      "New Trends in Programming",
      "Database Systems",
      "Social Network Analysis",
      "Data Mining",
      "Project Management",
      "User Experience Design",
      "Enterprise Resource Planning Systems",
      "System Analysis and Design",
      "Process Table Programming",
      "Production Management",
      "Digital Transformation",
      "Brand and Management",
      "Organizational Behavior",
      "Network Management and Information Security",
      "Entrepreneurship and Starting a Business",
      "Innovation Management",
      "Operations Research",
      "Decision Models",
      "Financial Statements Analysis",
      "Customer Relations Management",
      "Decision Support Systems",
    ],
    extracurricular_activities: [
      "Enhanced my English proficiency from intermediate to fluent level.",
      "Completed CS50's Introduction to Programming with Python course.",
      "Developed scripts in Python and Bash to enhance my skills in automation and problem-solving.",
      "Expanded my knowledge of networking fundamentals.",
      "Participated in Cybermentor's 'Zero to Hero' course to acquire knowledge in network penetration testing and fundamental cybersecurity principles.",
      "Having used Linux as my main operating system for almost four years, I have successfully resolved numerous Linux-related issues and explored various distributions.",
      "Acquired knowledge in Gentoo, Arch, Debian, NixOS, and Fedora to expand my Linux expertise, with significant progress in Fedora and Arch.",
    ],
  },
  {
    id: "University of Namik Kemal",
    category: ["all", "associate"],
    date: "2019-2021",
    title: "Associate Degree in Computer Programming",
    taken_courses: [
      "Computer Hardware",
      "Object Oriented Programming",
      "Data Structures and Programming",
      "Database",
      "Artificial Neural Networks",
      "System Programming",
      "Internet Programming",
      "System Analysis and Design",
      "Visual Programming",
      "Professional Foreign Language (English)",
      "Math",
      "Principles of Atatürk and History of Turkish Revolution",
      "Turkish Language",
    ],
    extracurricular_activities: [
      "Acquired fundamental knowledge of SQL and practiced it through homework assignments.",
      "Learned the fundamentals of virtualizing Linux on VMware and VirtualBox.",
      "Learned web development fundamentals: HTML, CSS, and PHP. Also gained proficiency in using Joomla and WordPress.",
      "Learned how programming languages function and the underlying processes in computer programming.",
      "Learned desktop and laptop maintenance, including cleaning and applying thermal paste.",
    ],
  },
];

function EducationPage() {
  const [_activeFilter, setActiveFilter] = useState<string>("all");
  const [_displayedEducation, setDisplayedEducation] = useState<Education[]>([]);

  useEffect(() => {
    const filtered = educations.filter((education) =>
      _activeFilter === "all" ? true : education.category.includes(_activeFilter)
    );
    setDisplayedEducation(filtered);
  }, [_activeFilter]);

  return (
    <Layout title="Education" description="My Education">
      <main className="container">
        <section className="portfolio-section">
          <div className="portfolio-header">
            <h1 className="portfolio-title">My Education</h1>
            <p className="portfolio-subtitle">
              Academic journey and qualifications
            </p>
          </div>

          <div className="portfolio-tabs">
            {["all", "associate", "bachelor"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`portfolio-tab ${_activeFilter === filter ? 'portfolio-tab-active' : ''}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="education-timeline">
            {_displayedEducation.map((education, index) => (
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
                    <h4 className="education-section-title">Courses Taken</h4>
                    <ul className="education-list">
                      {education.taken_courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="education-list-item">
                          {course.trim()}
                        </li>
                      ))}
                    </ul>

                    <div className="education-activities">
                      <h4 className="education-section-title">Extracurricular Activities</h4>
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
            {_displayedEducation.length === 0 && (
              <div className="text--center" style={{ padding: "2rem" }}>
                No education found for this filter.
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default EducationPage;
