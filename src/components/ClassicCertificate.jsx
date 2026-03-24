import React from 'react';
import styles from './ClassicCertificate.module.css';
import logoFallback from '../assets/logo.jpeg';

// SVG Assets
const CornerOrnament = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M5,5 L95,5 C95,20 80,35 50,50 C20,35 5,20 5,5 Z" fill="#FFC107" opacity="0.8" />
    <path d="M5,5 L5,95 C20,95 35,80 50,50 C35,20 20,5 5,5 Z" fill="#FFC107" />
    <circle cx="20" cy="20" r="8" fill="#D4AF37" />
    <path d="M40,15 Q50,0 60,15 Q50,30 40,15 Z" fill="#FFC107" />
    <path d="M15,40 Q0,50 15,60 Q30,50 15,40 Z" fill="#FFC107" />
  </svg>
);

const TopOrnament = () => (
  <svg className={styles.topOrnament} viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
    <path d="M100,20 Q120,0 140,20 Q160,40 180,20 Q190,10 200,20 L200,30 Q180,50 160,30 Q140,10 120,30 Q110,40 100,50 Q90,40 80,30 Q60,10 40,30 Q20,50 0,30 L0,20 Q10,10 20,20 Q40,40 60,20 Q80,0 100,20 Z" fill="#FFC107" />
    <circle cx="100" cy="25" r="10" fill="#D4AF37" />
  </svg>
);

const LaurelWreath = () => (
  <svg className={styles.laurelWreath} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    {/* Left branch */}
    <path d="M50,90 C20,90 10,60 10,40 C10,20 30,10 40,10" fill="none" stroke="#FFC107" strokeWidth="3" />
    <path d="M20,70 Q10,60 25,50 Q30,65 20,70" fill="#FFC107" />
    <path d="M15,50 Q5,40 20,30 Q30,45 15,50" fill="#FFC107" />
    <path d="M18,30 Q15,15 35,15 Q35,30 18,30" fill="#FFC107" />

    {/* Right branch */}
    <path d="M50,90 C80,90 90,60 90,40 C90,20 70,10 60,10" fill="none" stroke="#FFC107" strokeWidth="3" />
    <path d="M80,70 Q90,60 75,50 Q70,65 80,70" fill="#FFC107" />
    <path d="M85,50 Q95,40 80,30 Q70,45 85,50" fill="#FFC107" />
    <path d="M82,30 Q85,15 65,15 Q65,30 82,30" fill="#FFC107" />
  </svg>
);

const ClassicCertificate = ({
  name = "Nom Prénom",
  date = "Date",
  directorName = "",
  description = "",
  logoImage = null,
  institution = "INSTITUTION LEADER",
  mainTitle = "CERTIFICAT",
  subTitle = "D'ACCOMPLISSEMENT",
  presentationText = "Ce certificat est fièrement décerné à",
  bannerText = "Félicitations",
  sealText = "Sceau\nOfficiel\nValidé",
  dateLabel = "",
  signatureLabel = "Signature",
  department = ""
}) => {
  const currentLogo = logoImage || logoFallback;
  return (
    <div className={styles.container}>
      <div className={styles.certificateWrapper}>
        <div className={styles.certificateCard}>

          {/* Borders */}
          <div className={styles.outerBorder}></div>
          <div className={styles.innerBorder}></div>

          {/* Corner Ornaments */}
          <CornerOrnament className={`${styles.corner} ${styles.topLeft}`} />
          <CornerOrnament className={`${styles.corner} ${styles.topRight}`} />
          <CornerOrnament className={`${styles.corner} ${styles.bottomLeft}`} />
          <CornerOrnament className={`${styles.corner} ${styles.bottomRight}`} />

          {/* Watermark Logo */}
          <div className={styles.watermark} style={{ backgroundImage: `url(${currentLogo})` }}></div>

          {/* Top Center Ornament or Uploaded Logo */}
          <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
            {currentLogo ? (
              ""
            ) : (
              <TopOrnament />
            )}
          </div>

          {/* Left Ribbon & Seal */}
          <div className={styles.sealArea}>
            <div className={styles.redRibbons}>
              <div className={styles.redRibbonLeft}></div>
              <div className={styles.redRibbonRight}></div>
            </div>
            <div className={styles.goldSeal}>
              <span style={{ whiteSpace: 'pre-line' }}>{sealText}</span>
            </div>
          </div>

          {/* Right Laurel */}
          <LaurelWreath />

          {/* Texts */}
          <div className={styles.content}>
            {/* Header */}
            <h3 className={styles.institution}>{institution}</h3>
            <h1 className={styles.mainTitle}>{mainTitle}</h1>
            <h2 className={styles.subTitle}>{subTitle}</h2>
            <p className={styles.presentedTo} style={{ marginTop: '10px', fontSize: '20px' }}>{presentationText}</p>

            <div className={styles.nameSection}>
              <div className={styles.recipientName}>{name}</div>
              <div className={styles.department}>{department}</div>
              <div className={styles.nameUnderline}></div>
            </div>

            <p className={styles.loremText}>
              {description}
            </p>

            {/* Bottom Section */}
            <div className={styles.footer}>
              <div className={styles.signBlock}>
                <div className={styles.signLine}></div>
                <div className={styles.signLabel}>{dateLabel} {date}</div>
              </div>

              {/* Company banner */}
              <div className={styles.bannerContainer}>
                <div className={styles.bannerFoldLeft}></div>
                <div className={styles.bannerFoldRight}></div>
                <div className={styles.bannerMain}>
                  <span>{bannerText}</span>
                </div>
              </div>

              <div className={styles.signBlock}>
                <div className={styles.signLine}></div>
                <div className={styles.signLabel}>{signatureLabel}</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold' }}>{directorName}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicCertificate;