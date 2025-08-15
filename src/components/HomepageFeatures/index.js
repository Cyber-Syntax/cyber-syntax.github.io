import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react';

function Feature({ icon, title, description, isVisible, index }) {
  return (
    <div 
      className={clsx(
        "col col--4",
        styles.featureItem,
        isVisible ? styles.featureVisible : ''
      )}
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      <div className={styles.featureIcon}>
        <span>{icon}</span>
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // return (
  //   <section className={styles.features}>
  //     <div className="container">
  //       <Heading as="h2" className={styles.featuresTitle}>About Me</Heading>
  //       <div className="row">
  //         {FeatureList.map((props, idx) => (
  //           <Feature 
  //             key={idx} 
  //             {...props} 
  //             isVisible={isVisible}
  //             index={idx} 
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
