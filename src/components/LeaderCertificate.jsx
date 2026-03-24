import React from 'react';
import styles from './LeaderCertificate.module.css';
import logoFallback from '../assets/logo.svg';

const LeaderCertificate = ({
  name = "Nom & Prénom",
  date = "Date",
  directorName = "Directeur Général",
  description = "A suivi avec succès...",
  logoImage = null,
  institution = "INSTITUTION LEADER",
  mainTitle = "CERTIFICAT",
  presentationText = "PRÉSENTÉ POUR RÉUSSITE EXCEPTIONNELLE À",
  introText = "Ce Certificat de Participation Est Fièrement Présenté à",
  dateLabel = "Fait le",
  signatureLabel = "Directeur Général"
}) => {
  const currentLogo = logoImage || logoFallback;
  return (
    <div className={styles.container}>
      <div className={styles.certificateWrapper}>
        <div className={styles.certificateFrame}>

          {/* Inner Borders */}
          <div className={styles.blueBorder}></div>
          <div className={styles.goldBorder}></div>

          {/* Corner Triangles SVG */}
          <div className={`${styles.cornerBox} ${styles.topLeft}`}>
            <svg viewBox="0 0 200 200" preserveAspectRatio="none">
              <polygon points="0,0 200,0 0,200" fill="#0A3BBE" />
              <polygon points="200,0 200,30 30,200 0,200 0,170 170,0" fill="#FFC107" />
            </svg>
          </div>

          <div className={`${styles.cornerBox} ${styles.bottomRight}`}>
            <svg viewBox="0 0 200 200" preserveAspectRatio="none">
              {/* Pointing down-right */}
              <polygon points="200,200 0,200 200,0" fill="#0A3BBE" />
              <polygon points="0,200 0,170 170,0 200,0 200,30 30,200" fill="#FFC107" />
            </svg>
          </div>

          {/* Logos latéraux */}
          <div className={`${styles.logoSide} ${styles.leftLogo}`}>
            <img src={currentLogo} alt="Logo" />
          </div>
          <div className={`${styles.logoSide} ${styles.rightLogo}`}>
            <img src={currentLogo} alt="Logo" />
          </div>

          {/* Filigrane central (Watermark) */}
          <div className={styles.watermark} style={{ backgroundImage: `url(${currentLogo})` }}></div>

          {/* Contenu principal */}
          <div className={styles.content}>
            <header className={styles.header}>
              <h2 className={styles.institution}>{institution}</h2>
              <div className={styles.mainTitleBox}>
                <h1 className={styles.certTitle}>{mainTitle}</h1>
                <h3 className={styles.certSubtitle}>{presentationText}</h3>
              </div>
            </header>

            <main className={styles.bodyContent}>
              <p className={styles.introText}>{introText}</p>

              {/* Pill Container */}
              <div className={styles.nameContainer}>
                <div className={styles.nameText}>{name}</div>
              </div>

              <div className={styles.details}>
                {description}
              </div>
            </main>

            <footer className={styles.footer}>
              <div className={styles.locationBlock}>
                {dateLabel} {date}
              </div>
              <div className={styles.signatureBlock}>
                <div className={styles.signatureTitle}>{signatureLabel}</div>
                <div className={styles.signatureDecoration}></div>
                <div className={styles.signatureName}>{directorName}</div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCertificate;