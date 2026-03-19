import Awards from "./Awards";
import CompanyInfo from "./CompanyInfo";
import PersonalInfo from "./PersonalInfo";

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-section about-section--awards">
        <Awards />
      </section>

      <section className="about-section">
        <div className="container">
          <CompanyInfo />
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <span className="section-label">Our Team</span>
          <h2 className="section-heading" style={{ marginBottom: 'var(--space-8)' }}>The People Behind I-Com</h2>
          <PersonalInfo />
        </div>
      </section>

      <style>{`
        .about-page { padding-bottom: var(--space-16); }
        .about-section { padding: var(--space-16) 0; }
        .about-section + .about-section { border-top: 1px solid var(--color-glass-border); }
        .about-section--awards { padding: 0; }
      `}</style>
    </div>
  );
}

export default AboutPage;
