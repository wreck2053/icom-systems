function CompanyInfo() {
  return (
    <div className="company-info-card">
      <span className="section-label">Our Story</span>
      <h2 className="section-heading">About Us</h2>
      <p className="section-body">
        Icom Inc. (アイコム株式会社, Aikomu Kabushiki-gaisha) is a Japanese
        manufacturer of radio transmitting and receiving equipment, founded
        in 1954 by Tokuzo Inoue with the company's original name being
        "Inoue." Its products now include equipment for radio amateurs,
        pilots, maritime applications, land mobile professional applications and
        radio scanner enthusiasts. Its headquarters are in Osaka, Japan, with
        branch offices in the United States (in Kirkland, Washington), Canada
        (in Delta, British Columbia), Australia (Melbourne, Victoria), New
        Zealand (Auckland), the United Kingdom (Kent, England), France
        (Toulouse), Germany (Bad Soden), Spain (Barcelona) and the People's
        Republic of China (Beijing).
      </p>
      <style>{`
        .company-info-card {
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-2xl);
          padding: var(--space-12);
          box-shadow: var(--glow-card);
        }
      `}</style>
    </div>
  );
}

export default CompanyInfo;
