import React from 'react';
import styles from './ModernCertificate.module.css';
import logoFallback from '../assets/logo.jpeg';


const ModernCertificate = ({
    name = "Nom & Prénom",
    date = "Date",
    directorName = "Signature",
    description = "Décerné pour des résultats exceptionnels au sein de notre programme.",
    logoImage = null,
    secondLogoImage = null,
    institution = "INSTITUTION LEADER",
    mainTitle = "CERTIFICAT",
    subTitle = "D'ACHÈVEMENT",
    presentationText = "Attribué à",
    dateLabel = "Date",
    signatureLabel = "Directeur Général",
    department = "",
    civilite = "M"
}) => {
    const currentLogo = logoImage || logoFallback;
    const secondLogo = secondLogoImage || currentLogo; // Fallback to first if second not provided

    return (
        <div className={styles.container}>
            <div className={styles.certificateWrapper}>
                <div className={styles.certificateFrame}>
                    {/* Premium Abstract Backgrounds */}
                    <div className={styles.meshBackground}></div>
                    <div className={styles.geometricAccent}></div>
                    <div className={styles.glowSpot}></div>

                    {/* Abstract Shapes & Bars */}
                    <div className={styles.verticalAccent}></div>
                    <div className={styles.shapeTopLeft}></div>
                    <div className={styles.shapeBottomRight}></div>

                    {/* Minimalist Tech Badge */}


                    <div className={styles.content}>
                        <div className={styles.institutionHeader}>
                            <img src={currentLogo} alt="Logo Left" className={styles.inlineLogo} />
                            <div className={styles.institutionName}>{institution}</div>
                            <img src={secondLogo} alt="Logo Right" className={styles.inlineLogo} />
                        </div>

                        <div className={styles.titleSection}>
                            <h1 className={styles.mainTitle}>{mainTitle}</h1>
                            <div className={styles.titleUnderline}></div>
                        </div>

                        <div className={styles.presentationText}>{presentationText || "atteste par la présente que :"}</div>

                        <div className={styles.recipientBlock}>
                            <div className={styles.recipientName}>
                                <span className={styles.civilite}>{civilite}</span> {name}
                            </div>
                            <div className={styles.department}>{department}</div>
                        </div>

                        <div className={styles.bodyText}>
                            <p>a été membre actif de ladite association et a contribué de manière significative à la réalisation de ses objectifs et au développement de ses activités.</p>
                            <p>En reconnaissance de son engagement, de son sens de responsabilité et de ses services rendus à la cause de l’association, la présente attestation lui est décernée.</p>
                        </div>
                    </div>

                    {/* Footer Alignment Optimized */}
                    <div className={styles.footer}>
                        <div className={styles.footerBlock}>
                            <div className={styles.footerLabel}>{dateLabel || "Fait à Labé, le"}</div>
                            <div className={styles.footerValue}>{date}</div>
                        </div>

                        <div className={styles.footerBlock} style={{ textAlign: 'right' }}>
                            <div className={styles.footerLabel}>{signatureLabel || "Le Président"}</div>
                            <div className={styles.footerValue} style={{ fontWeight: 800 }}>{directorName}</div>
                            <div className={styles.signatureLine}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModernCertificate;
