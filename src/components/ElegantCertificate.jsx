import React from 'react';
import styles from './ElegantCertificate.module.css';
import logoFallback from '../assets/logo.svg';

const ElegantBadge = () => (
    <div className={styles.badgeBadge}>
        <svg className={styles.badgeSVG} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#fdfbfb" stroke="#800020" strokeWidth="2" />
            <path d="M50,15 L60,35 L80,40 L65,55 L70,75 L50,65 L30,75 L35,55 L20,40 L40,35 Z" fill="#800020" opacity="0.1" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#800020" strokeWidth="1" strokeDasharray="4 2" />
            <text x="50" y="55" fontFamily="Georgia, serif" fontSize="18" fill="#800020" fontWeight="bold" textAnchor="middle">2026</text>
        </svg>
    </div>
);

const ElegantCertificate = ({
    name = "Nom & Prénom",
    date = "Date",
    directorName = "Signature",
    description = "Décerné pour des résultats exceptionnels au sein de notre programme.",
    logoImage = null,
    institution = "INSTITUTION LEADER",
    mainTitle = "CERTIFICAT",
    subTitle = "D'HONNEUR",
    presentationText = "Ce certificat honore",
    dateLabel = "Fait le",
    signatureLabel = "Le Directeur",
    department = ""
}) => {
    const currentLogo = logoImage || logoFallback;

    return (
        <div className={styles.container}>
            <div className={styles.certificateWrapper}>
                <div className={styles.certificateFrame}>

                    <div className={styles.sideBorderLeft}></div>
                    <div className={styles.sideBorderRight}></div>
                    <div className={styles.innerTopLine}></div>
                    <div className={styles.innerBottomLine}></div>

                    <ElegantBadge />
                    <img src={currentLogo} alt="Logo" className={styles.topLogo} />

                    <div className={styles.content}>
                        <div className={styles.institution}>{institution}</div>
                        <h1 className={styles.mainTitle}>{mainTitle}</h1>
                        <h2 className={styles.subTitle}>{subTitle}</h2>

                        <div className={styles.presentedTo}>{presentationText}</div>

                        <div className={styles.recipientName}>{name}</div>
                        <div className={styles.department}>{department}</div>
                        <div className={styles.nameUnderline}></div>

                        <div className={styles.description}>{description}</div>

                        <div className={styles.footer}>
                            <div className={styles.footerBlock}>
                                <div className={styles.line}></div>
                                <div className={styles.footerLabel}>{dateLabel}</div>
                                <div className={styles.footerValue}>{date}</div>
                            </div>

                            <div className={styles.footerBlock}>
                                <div className={styles.line}></div>
                                <div className={styles.footerLabel}>{signatureLabel}</div>
                                <div className={styles.footerValue}>{directorName}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElegantCertificate;
