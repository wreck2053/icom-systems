function PersonalInfo() {
  const people = [
    {
      id: 'elon',
      name: 'Elon Musk',
      image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iBdBj0QvfR.E/v1/-1x-1.jpg',
      bio: 'Elon Reeve Musk (born June 28, 1971) is a businessman and investor. Musk is the founder, chairman, CEO and chief technology officer of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner, chairman and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI; and president of the Musk Foundation.',
    },
    {
      id: 'vladimir',
      name: 'Vladimir Putin',
      image: 'https://static.themoscowtimes.com/image/1920/e1/8647c7c484f44b68af6e62907e2053fe.jpeg',
      bio: 'Vladimir Vladimirovich Putin (born 7 October 1952) is a Russian politician and former intelligence officer who has been President of Russia since 2012. Putin has held continuous positions as president or prime minister since 1999: as prime minister from 1999 to 2000 and from 2008 to 2012, and as president from 2000 to 2008 and since 2012.',
    },
  ];

  return (
    <>
      <div className="team-grid">
        {people.map(person => (
          <div key={person.id} className="profile-card">
            <img src={person.image} alt={person.name} className="profile-card__image" />
            <div className="profile-card__content">
              <h3 className="profile-card__name">{person.name}</h3>
              <p className="profile-card__bio">{person.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: var(--space-8);
        }
        .profile-card {
          background: var(--color-glass-fill);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-2xl);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          overflow: hidden;
          box-shadow: var(--glow-card);
          display: grid;
          grid-template-columns: 160px 1fr;
          transition: transform var(--transition-base), box-shadow var(--transition-base);
        }
        .profile-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl), var(--glow-card);
        }
        .profile-card__image {
          width: 160px;
          height: 220px;
          object-fit: cover;
          object-position: top;
        }
        .profile-card__content {
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        .profile-card__name {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--font-weight-bold);
          color: var(--color-text-primary);
        }
        .profile-card__bio {
          font-size: var(--text-sm);
          line-height: var(--line-height-loose);
          color: var(--color-text-secondary);
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 480px) {
          .profile-card { grid-template-columns: 1fr; }
          .profile-card__image { width: 100%; height: 200px; }
        }
      `}</style>
    </>
  );
}

export default PersonalInfo;
