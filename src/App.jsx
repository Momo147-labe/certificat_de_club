import './App.css';
import Certificate from './components/Certificate';
import ClassicCertificate from './components/ClassicCertificate';
import LeaderCertificate from './components/LeaderCertificate';
import PrestigeCertificate from './components/PrestigeCertificate';
import ModernCertificate from './components/ModernCertificate';
import SimpleCertificate from './components/SimpleCertificate';
import ElegantCertificate from './components/ElegantCertificate';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import data from './data';


const App = () => {
  const [model, setModel] = useState('classic');
  const [mainTitle, setMainTitle] = useState('ATTESTATION DE RECONNAISSANCE');
  const [subTitle, setSubTitle] = useState("");
  const [institution, setInstitution] = useState('UNIVERSITÉ DE LABÉ\nCONSEIL DES ÉTUDIANTS (CEUIL)');
  const [presentationText, setPresentationText] = useState('Le Conseil des Étudiants de l’Université de Labé (CEUIL) atteste par la présente que :');
  const [introText, setIntroText] = useState('Ce Certificat de Participation Est Fièrement Présenté à');
  const [bannerText, setBannerText] = useState('Félicitations');
  const [sealText, setSealText] = useState('Sceau\nOfficiel\nValidé');
  const [badgeText, setBadgeText] = useState('Meilleur\nPrix\n2021');
  const [dateLabel, setDateLabel] = useState('Fait à Labé, le');
  const [date, setDate] = useState('23 Mars 2026');
  const [signatureLabel, setSignatureLabel] = useState('Signature\nLe Président');
  const [directorName, setDirectorName] = useState('[Nom du signataire]');
  const [description, setDescription] = useState('a été membre actif de ladite structure et a contribué de manière significative à son développement.\n\nEn reconnaissance de son engagement, de son dévouement et de ses services rendus, la présente attestation lui est décernée.');
  const [logoImage, setLogoImage] = useState(null);

  const cvPreviewRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModelChange = (modelType, studentName) => {
    const props = {
      name: studentName,
      date: date,
      directorName: directorName,
      description: description,
      logoImage: logoImage,
      institution: institution, // Added institution explicitly as per instruction
      mainTitle: mainTitle,
      subTitle: subTitle,
      presentationText: presentationText,
      dateLabel: dateLabel,
      signatureLabel: signatureLabel,
      introText: introText,
      bannerText: bannerText,
      sealText: sealText,
      badgeText: badgeText
    };
    switch (modelType) {
      case 'classic':
        return <ClassicCertificate {...props} />
      case 'leader':
        return <LeaderCertificate {...props} />
      case 'prestige':
        return <PrestigeCertificate {...props} />
      case 'modern':
        return <ModernCertificate {...props} />
      case 'simple':
        return <SimpleCertificate {...props} />
      case 'elegant':
        return <ElegantCertificate {...props} />
      case 'certificate':
        return <Certificate {...props} />
      default:
        return <ClassicCertificate {...props} />
    }
  }

  const handleDownloadPdf = async () => {
    const container = cvPreviewRef.current;

    // Sélectionner TOUTES les cartes rendues
    const elements = container?.querySelectorAll('[class*="certificateCard"], [class*="certificateFrame"]');

    if (!elements || elements.length === 0) return;

    // Initialiser le PDF global (Paysage, A4)
    const pdf = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Boucler sur chaque carte pour l'ajouter au PDF
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      // 1. Capture en haute qualité
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.9);

      // Si ce n'est pas la première carte, on ajoute une nouvelle page au PDF
      if (i > 0) {
        pdf.addPage();
      }

      // 3. Remplir intégralement la page A4 (sans marges)
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    }

    // 4. Télécharger le PDF contenant toutes les pages
    pdf.save(`Certificats_${model}_batch.pdf`);
  };

  return (
    <div className='grid_template'>
      <div className='grid_gauche'>
        <h2 style={{ color: 'white', marginTop: 0 }}>Panneau de Contrôle</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Type de carte :</label>
            <select
              style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
              onChange={(e) => setModel(e.target.value)}
              value={model}
            >
              <option value="classic">Modèle Classic (Jaune/Or)</option>
              <option value="leader">Modèle Leader (Bleu/Or)</option>
              <option value="certificate">Modèle Fabina (Rouge/Or)</option>
              <option value="prestige">Modèle Prestige (Noir/Or)</option>
              <option value="modern">Modèle Moderne (Minimaliste Vert/Gris)</option>
              <option value="simple">Modèle Épuré (Encre-éco: Noir/Blanc)</option>
              <option value="elegant">Modèle Élégant (Encre-éco: Bordeaux/Gris)</option>
            </select>
          </div>

          <h3 style={{ color: '#FFD700', margin: '15px 0 5px 0', borderBottom: '1px solid #555', paddingBottom: '5px' }}>En-tête</h3>
          <div>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Titre Principal :</label>
            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={mainTitle} onChange={(e) => setMainTitle(e.target.value)} />
          </div>

          {/* Leader Certificate doesn't usually use subTitle, but the rest do */}
          {(model !== 'leader') && (
            <div style={{ marginTop: '10px' }}>
              <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Sous-Titre :</label>
              <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={subTitle} onChange={(e) => setSubTitle(e.target.value)} placeholder="(ex: D'ACCOMPLISSEMENT)" />
            </div>
          )}

          <div style={{ marginTop: '10px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Institution :</label>
            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={institution} onChange={(e) => setInstitution(e.target.value)} placeholder="(ex: INSTITUTION LEADER)" />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Texte de Présentation :</label>
            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={presentationText} onChange={(e) => setPresentationText(e.target.value)} />
          </div>

          <h3 style={{ color: '#FFD700', margin: '15px 0 5px 0', borderBottom: '1px solid #555', paddingBottom: '5px' }}>Cœur</h3>

          {model === 'leader' && (
            <div>
              <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Texte Intro (Avant le nom) :</label>
              <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={introText} onChange={(e) => setIntroText(e.target.value)} />
            </div>
          )}

          <div style={{ marginTop: model === 'leader' ? '10px' : '0' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Texte de Félicitations :</label>
            <textarea style={{ width: '100%', padding: '10px', borderRadius: '5px', height: '80px', boxSizing: 'border-box', resize: 'vertical' }} value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          {(model === 'classic' || model === 'certificate') && (
            <h3 style={{ color: '#FFD700', margin: '15px 0 5px 0', borderBottom: '1px solid #555', paddingBottom: '5px' }}>Sceaux & Ornements</h3>
          )}

          {model === 'classic' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Texte Bannière :</label>
                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={bannerText} onChange={(e) => setBannerText(e.target.value)} />
              </div>
              <div>
                <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Texte du Sceau :</label>
                <textarea style={{ width: '100%', padding: '10px', borderRadius: '5px', height: '60px', boxSizing: 'border-box', resize: 'none' }} value={sealText} onChange={(e) => setSealText(e.target.value)} />
              </div>
            </div>
          )}

          {model === 'certificate' && (
            <div>
              <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Texte des Badges Spéciaux :</label>
              <textarea style={{ width: '100%', padding: '10px', borderRadius: '5px', height: '60px', boxSizing: 'border-box', resize: 'none' }} value={badgeText} onChange={(e) => setBadgeText(e.target.value)} />
            </div>
          )}

          <h3 style={{ color: '#FFD700', margin: '15px 0 5px 0', borderBottom: '1px solid #555', paddingBottom: '5px' }}>Pied de page</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Label Date :</label>
              <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={dateLabel} onChange={(e) => setDateLabel(e.target.value)} />
            </div>
            <div>
              <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Valeur Date :</label>
              <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Label Signat. :</label>
              <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={signatureLabel} onChange={(e) => setSignatureLabel(e.target.value)} />
            </div>
            <div>
              <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Nom Signat. :</label>
              <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', boxSizing: 'border-box' }} value={directorName} onChange={(e) => setDirectorName(e.target.value)} />
            </div>
          </div>

          <div>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Logo (Importation) :</label>
            <input
              type="file"
              accept="image/*"
              style={{ color: 'white' }}
              onChange={handleImageUpload}
            />
          </div>

          <div style={{ marginTop: '10px', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ color: 'white', margin: '0 0 10px 0' }}>Statistiques</h3>
            <p style={{ color: '#A0FFC0', fontWeight: 'bold', margin: 0, fontSize: '18px' }}>
              📝 {data.length} certificats prêts
            </p>
          </div>

          <button
            onClick={handleDownloadPdf}
            style={{ marginTop: '5px', padding: '15px', backgroundColor: '#FFD700', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}
          >
            Télécharger les {data.length} PDFs
          </button>
        </div>
      </div>

      {/* Aperçu visible : une seule carte (le template) */}
      <div className='grid_droite'>
        {data.length > 0 && handleModelChange(model, data[0])}
      </div>

      {/* Conteneur caché : génère toutes les cartes pour le PDF */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={cvPreviewRef}>
          {data.map((item, index) => (
            <div key={index}>
              {handleModelChange(model, item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;