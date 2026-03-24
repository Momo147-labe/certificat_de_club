import React from 'react';
import styles from './PrestigeCertificate.module.css';
import logoFallback from '../assets/logo.svg';

const CornerSVG = ({ className }) => (
    <svg className={`${styles.cornerDecoration} ${className}`} viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,10 L140,10 L140,25 L25,25 L25,140 L10,140 Z" fill="#D4AF37" />
        <path d="M35,35 L100,35 L100,38 L38,38 L38,100 L35,100 Z" fill="rgba(212, 175, 55, 0.5)" />
        <circle cx="50" cy="50" r="4" fill="#D4AF37" />
        <circle cx="20" cy="20" r="3" fill="#D4AF37" />
        <path d="M25,25 L50,50" stroke="#D4AF37" strokeWidth="1" />
    </svg>
);

const CenterEmblem = () => (
    <svg className={styles.centerEmblem} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,5 L90,25 L90,75 L50,95 L10,75 L10,25 Z" fill="none" stroke="#D4AF37" strokeWidth="2" />
        <path d="M50,15 L80,30 L80,70 L50,85 L20,70 L20,30 Z" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" />
        <circle cx="50" cy="50" r="15" fill="#D4AF37" />
        <path d="M50,25 L50,45" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M25,50 L40,50" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M75,50 L60,50" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
);

const PrestigeCertificate = ({
    name = "Nom Prénom",
    date = "Date",
    directorName = "Le Directeur",
    description = "Décerné pour des résultats exceptionnels.",
    logoImage = null,
    institution = "INSTITUTION LEADER",
    mainTitle = "CERTIFICAT",
    subTitle = "D'EXCELLENCE",
    presentationText = "Ce certificat est fièrement décerné à",
    dateLabel = "Date de délivrance",
    signatureLabel = "Signature Autorisée",
    department = ""
}) => {
    const currentLogo = logoImage || logoFallback;

    return (
        <div className={styles.container}>
            <div className={styles.certificateWrapper}>
                <div className={styles.certificateFrame}>

                    {/* Borders & Corners */}
                    <div className={styles.outerGeometricBorder}></div>
                    <div className={styles.innerGeometricBorder}></div>

                    <CornerSVG className={styles.topLeft} />
                    <CornerSVG className={styles.topRight} />
                    <CornerSVG className={styles.bottomLeft} />
                    <CornerSVG className={styles.bottomRight} />

                    {/* Watermark Logo */}
                    <div className={styles.watermark} style={{ backgroundImage: `url(${currentLogo})` }}></div>

                    {logoImage && (
                        <img src={logoImage} alt="Logo" className={styles.topLogo} />
                    )}

                    {/* Texts */}
                    <div className={styles.content}>
                        <h3 className={styles.institution}>{institution}</h3>
                        <h1 className={styles.mainTitle}>{mainTitle}</h1>
                        <h2 className={styles.subTitle}>{subTitle}</h2>

                        <p className={styles.presentedTo}>{presentationText}</p>

                        <div className={styles.recipientName}>{name}</div>
                        <div className={styles.department}>{department}</div>
                        <div className={styles.nameUnderline}></div>

                        <p className={styles.description}>{description}</p>

                        {/* Footer */}
                        <div className={styles.footer}>
                            <div className={styles.footerBlock}>
                                <div className={styles.line}></div>
                                <div className={styles.footerLabel}>{dateLabel}</div>
                                <div className={styles.footerValue}>{date}</div>
                            </div>

                            <CenterEmblem />

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

export default PrestigeCertificate;
