import styles from './Certificate.module.css';

// Custom SVG Wavy Frame imitating Image 2
const WavyFrame = () => (
  <svg className={styles.wavyFrame} viewBox="0 0 900 650" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.4" />
      </filter>
    </defs>
    {/* Base Red Frame filling the outer area */}
    <path
      d="M0,0 L900,0 L900,650 L0,650 Z M50,50 C150,20 300,70 450,40 C600,10 750,70 850,50 C880,150 820,325 860,500 C880,600 750,580 600,610 C450,640 300,580 150,610 C40,640 20,500 40,325 C60,150 20,100 50,50 Z"
      fill="#6A0028"
      fillRule="evenodd"
      filter="url(#dropShadow)"
    />
    {/* Thick Gold Wavy Edge Overlay */}
    <path
      d="M50,50 C150,20 300,70 450,40 C600,10 750,70 850,50 C880,150 820,325 860,500 C880,600 750,580 600,610 C450,640 300,580 150,610 C40,640 20,500 40,325 C60,150 20,100 50,50 Z"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="12"
    />
    <path
      d="M50,50 C150,20 300,70 450,40 C600,10 750,70 850,50 C880,150 820,325 860,500 C880,600 750,580 600,610 C450,640 300,580 150,610 C40,640 20,500 40,325 C60,150 20,100 50,50 Z"
      fill="none"
      stroke="#FFDF70"
      strokeWidth="4"
    />
  </svg>
);

const GreenPearl = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="greenGloss" cx="35%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#A0FFC0" />
        <stop offset="15%" stopColor="#00E65B" />
        <stop offset="50%" stopColor="#008033" />
        <stop offset="100%" stopColor="#00220B" />
      </radialGradient>
      <filter id="pearlDropShadow">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodOpacity="0.6" />
      </filter>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#greenGloss)" filter="url(#pearlDropShadow)" />
  </svg>
);

const TopBadge = ({ className, text }) => (
  <div className={`${styles.topBadge} ${className}`}>
    <div className={styles.badgeRibbonLeft}></div>
    <div className={styles.badgeRibbonRight}></div>
    <div className={styles.badgeMedal}>
      <div className={styles.badgeMedalInner}>
        <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
      </div>
    </div>
  </div>
);

const Certificate = ({
  name = "Lanita Fabina",
  date = "Date",
  directorName = "",
  description = "",
  institution = "INSTITUTION LEADER",
  mainTitle = "CERTIFICAT",
  subTitle = "D'ACCOMPLISSEMENT",
  presentationText = "Ce certificat est fièrement présenté à",
  badgeText = "Meilleur\nPrix\n2021",
  dateLabel = "DATE",
  signatureLabel = "SIGNATURE"
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.certificateWrapper}>
        <div className={styles.certificateCard}>

          {/* Background Wavy Red Border */}
          <WavyFrame />

          {/* Green Metallic Pearls */}
          <GreenPearl className={`${styles.pearl} ${styles.pearlLeft}`} />
          <GreenPearl className={`${styles.pearl} ${styles.pearlRightBottom}`} />

          {/* Badges */}
          <TopBadge className={styles.badgePositionLeft} text={badgeText} />
          <TopBadge className={styles.badgePositionRight} text={badgeText} />

          {/* {logoImage && (
            <img
              src={logoImage}
              alt="Logo"
              style={{ position: 'absolute', top: '35px', left: '50%', transform: 'translateX(-50%)', width: '90px', height: '90px', objectFit: 'contain', zIndex: 100 }}
            />
          )} */}

          {/* Text Content */}
          <div className={styles.content}>
            <h3 className={styles.institution}>{institution}</h3>
            <h1 className={styles.title}>{mainTitle}</h1>
            <h2 className={styles.subtitle}>{subTitle}</h2>

            <p className={styles.presentation}>
              {presentationText}
            </p>
            <div className={styles.recipientName}>{name}</div>

            <div className={styles.divider}></div>

            <p className={styles.description}>
              {description}
            </p>

            {/* Footer */}
            <footer className={styles.footer}>
              <div className={styles.dateBlock}>
                <div className={styles.dateLine}></div>
                <div className={styles.dateLabel}>{dateLabel}</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold' }}>{date}</div>
              </div>

              <div className={styles.signBlock}>
                <div className={styles.signLine}></div>
                <div className={styles.signLabel}>{signatureLabel}</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold' }}>{directorName}</div>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;