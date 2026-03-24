import styles from './LeaderCertificate.module.css';
import logoFallback from '../assets/logo.jpeg';
const logo = "/images.png";

const LeaderCertificate = ({
  name = "Nom & Prénom",
  date = "Date",
  directorName = "Directeur Général",
  description = "A suivi avec succès...",
  logoImage = null,
  institution = "INSTITUTION LEADER",
  mainTitle = "CERTIFICAT",
  presentationText = "PRÉSENTÉ POUR RÉUSSITE EXCEPTIONNELLE À",
  dateLabel = "Fait le",
  signatureLabel = "Directeur Général",
  department = ""
}) => {
  const currentLogo = logoImage || logoFallback;
  return (
    <div className={styles.container}>
      <div className={styles.certificateWrapper}>
        <div className={styles.certificateFrame}>

          {/* Inner Borders */}
          <div className={styles.blueBorder}></div>
          <div className={styles.goldBorder}></div>

          {/* Refined Corner Ornaments */}
          <div className={`${styles.cornerBox} ${styles.topLeft}`}>
            <svg viewBox="0 0 200 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E40AF" />
                  <stop offset="100%" stopColor="#0A2472" />
                </linearGradient>
              </defs>
              <polygon points="0,0 200,0 0,200" fill="url(#blueGrad)" />
              <polygon points="200,0 200,40 40,200 0,200 0,160 160,0" fill="#FFC107" />
              <circle cx="35" cy="35" r="12" fill="#FFFFFF" opacity="0.4" />
            </svg>
          </div>

          <div className={`${styles.cornerBox} ${styles.bottomRight}`}>
            <svg viewBox="0 0 200 200" preserveAspectRatio="none">
              <polygon points="200,200 0,200 200,0" fill="url(#blueGrad)" />
              <polygon points="0,200 0,160 160,0 200,0 200,40 40,200" fill="#FFC107" />
              <circle cx="165" cy="165" r="12" fill="#FFFFFF" opacity="0.4" />
            </svg>
          </div>

          {/* Logos latéraux */}
          {/* <div className={`${styles.logoSide} ${styles.leftLogo}`}>
            <img src={currentLogo} alt="Logo" />
          </div> */}
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


              {/* Pill Container */}
              <div className={styles.nameContainer}>
                <div className={styles.nameText}>{name}</div>
                <div className={styles.departmentName}>{department}</div>
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