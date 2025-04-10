import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="homepage-container">
      <Heading as="h1" className="homepage-title">
        {siteConfig.title}
      </Heading>
      <p className="homepage-subtitle">{siteConfig.tagline}</p>

      <div className="homepage-buttons-section">
        <h2 className="homepage-buttons-title">Documentation & Resources</h2>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg padding-horiz--md margin-right--md margin-bottom--md"
            to="/nixos"
          >
            My NixOS Wiki
          </Link>
          <Link
            className="button button--primary button--lg padding-horiz--md margin-right--md margin-bottom--md"
            to="/dev"
          >
            My Developer Wiki
          </Link>
          <Link
            className="button button--primary button--lg padding-horiz--md margin-bottom--md"
            to="/docs/intro"
          >
            Other Wiki
          </Link>
        </div>
      </div>
      
      <div className="homepage-buttons-section">
        <h2 className="homepage-buttons-title">Portfolio</h2>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg padding-horiz--md margin-right--md margin-bottom--md"
            to="/projects"
          >
            My Projects
          </Link>
          <Link
            className="button button--secondary button--lg padding-horiz--md margin-right--md margin-bottom--md"
            to="/skills"
          >
            My Skills
          </Link>
          <Link
            className="button button--secondary button--lg padding-horiz--md margin-bottom--md"
            to="/educations"
          >
            My Education
          </Link>
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
      <main className="homepage-main">
        <HomepageHeader />
        <div className="homepage-feature-section">
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
