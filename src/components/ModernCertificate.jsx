import React from 'react';
import styles from './ModernCertificate.module.css';
import logoFallback from '../assets/logo.svg';

const ModernBadge = () => (
    <div className={styles.badgeBadge}>
        <svg className={styles.badgeSVG} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#059669" />
                </linearGradient>
            </defs>
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="url(#emeraldGrad)" />
            <polygon points="50,15 85,30 85,70 50,85 15,70 15,30" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 2" />
            <text x="50" y="45" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">VALIDÉ</text>
            <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="normal" fill="#FFFFFF" textAnchor="middle">100%</text>
        </svg>
    </div>
);

const ModernCertificate = ({
    name = "Nom & Prénom",
    date = "Date",
    directorName = "Signature",
    description = "Décerné pour des résultats exceptionnels au sein de notre programme.",
    logoImage = null,
    institution = "INSTITUTION LEADER",
    mainTitle = "CERTIFICAT",
    subTitle = "D'ACHÈVEMENT",
    presentationText = "Attribué à",
    dateLabel = "Date",
    signatureLabel = "Directeur Général"
}) => {
    const currentLogo = logoImage || logoFallback;

    return (
        <div className={styles.container}>
            <div className={styles.certificateWrapper}>
                <div className={styles.certificateFrame}>

                    {/* Abstract Shapes & Bars */}
                    <div className={styles.verticalAccent}></div>
                    <div className={styles.shapeTopLeft}></div>
                    <div className={styles.shapeBottomRight}></div>

                    {/* Minimalist Tech Badge */}
                    <ModernBadge />

                    <img src={currentLogo} alt="Logo" className={styles.topLogo} />

                    {/* Texts */}
                    <div className={styles.content}>
                        <div className={styles.institution}>{institution}</div>
                        <h1 className={styles.mainTitle}>{mainTitle}</h1>
                        <h2 className={styles.subTitle}>{subTitle}</h2>

                        <div className={styles.presentedTo}>{presentationText}</div>

                        <div className={styles.recipientName}>{name}</div>

                        <div className={styles.description}>{description}</div>
                    </div>

                    {/* Footer */}
                    <div className={styles.footer}>
                        <div className={styles.footerBlock}>
                            <div className={styles.footerLabel}>{dateLabel}</div>
                            <div className={styles.footerValue}>{date}</div>
                        </div>

                        <div className={styles.footerBlock} style={{ textAlign: 'right' }}>
                            <div className={styles.footerLabel}>{signatureLabel}</div>
                            <div className={styles.footerValue} style={{ paddingTop: '10px' }}>{directorName}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModernCertificate;
