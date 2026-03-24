import React from 'react';
import styles from './SimpleCertificate.module.css';
import logoFallback from '../assets/logo.svg';

const MinimalBadge = () => (
    <div className={styles.badgeBadge}>
        <svg className={styles.badgeSVG} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#111" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#555" strokeWidth="0.5" />
            <text x="50" y="47" fontFamily="Times New Roman, serif" fontSize="12" fill="#111" textAnchor="middle" letterSpacing="2">SCEAU</text>
            <text x="50" y="60" fontFamily="Times New Roman, serif" fontSize="9" fill="#555" textAnchor="middle" letterSpacing="1">OFFICIEL</text>
        </svg>
    </div>
);

const SimpleCertificate = ({
    name = "Nom & Prénom",
    date = "Date",
    directorName = "Signature",
    description = "Décerné pour avoir complété le cursus de formation avec diligence et succès.",
    logoImage = null,
    institution = "INSTITUTION LEADER",
    mainTitle = "CERTIFICAT",
    subTitle = "D'ACHÈVEMENT",
    presentationText = "Attribué à",
    dateLabel = "Date de Délivrance",
    signatureLabel = "Directeur Général"
}) => {
    const currentLogo = logoImage || logoFallback;

    return (
        <div className={styles.container}>
            <div className={styles.certificateWrapper}>
                <div className={styles.certificateFrame}>

                    <div className={styles.thinBorder}></div>
                    <div className={styles.thinInnerBorder}></div>

                    <MinimalBadge />

                    <img src={currentLogo} alt="Logo" className={styles.topLogo} />

                    <div className={styles.content}>
                        <div className={styles.institution}>{institution}</div>
                        <h1 className={styles.mainTitle}>{mainTitle}</h1>
                        <h2 className={styles.subTitle}>{subTitle}</h2>

                        <div className={styles.presentedTo}>{presentationText}</div>

                        <div className={styles.recipientName}>{name}</div>
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

export default SimpleCertificate;
