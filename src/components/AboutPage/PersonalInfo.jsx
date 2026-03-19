import { motion } from "framer-motion";

const people = [
  {
    id: "elon",
    name: "Elon Musk",
    role: "Chief Executive Officer",
    tag: "CEO",
    tagColor: "#00c2ff",
    image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iBdBj0QvfR.E/v1/-1x-1.jpg",
    bio: "Elon Reeve Musk (born June 28, 1971) is a businessman and investor — founder, chairman, CEO and CTO of SpaceX; angel investor, CEO, and product architect of Tesla, Inc.; and founder of the Boring Company, xAI, Neuralink, and OpenAI.",
    metrics: [
      { label: "Experience", value: "25+ yrs" },
      { label: "Ventures", value: "6+" },
    ],
  },
  {
    id: "vladimir",
    name: "Vladimir Putin",
    role: "Chief Operations Officer",
    tag: "COO",
    tagColor: "#a78bfa",
    image: "https://static.themoscowtimes.com/image/1920/e1/8647c7c484f44b68af6e62907e2053fe.jpeg",
    bio: "Vladimir Vladimirovich Putin (born 7 October 1952) is a statesman and former intelligence officer with decades of executive leadership experience. He has held senior positions in national governance since 1999 across multiple consecutive terms.",
    metrics: [
      { label: "Experience", value: "30+ yrs" },
      { label: "Leadership", value: "Executive" },
    ],
  },
];

function PersonalInfo() {
  return (
    <>
      <div className="pi-grid">
        {people.map((person, i) => (
          <motion.div
            key={person.id}
            className="pi-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image column */}
            <div className="pi-card__photo-col">
              <img src={person.image} alt={person.name} className="pi-card__photo" />
              <div className="pi-card__photo-fade" />
              {/* Tag badge over image */}
              <span
                className="pi-card__tag"
                style={{ background: person.tagColor + "22", color: person.tagColor, borderColor: person.tagColor + "55" }}
              >
                {person.tag}
              </span>
            </div>

            {/* Content column */}
            <div className="pi-card__content">
              <div className="pi-card__header">
                <h3 className="pi-card__name">{person.name}</h3>
                <p className="pi-card__role">{person.role}</p>
              </div>

              <div className="pi-card__divider" />

              <p className="pi-card__bio">{person.bio}</p>

              {/* Mini metrics */}
              <div className="pi-card__metrics">
                {person.metrics.map((m, j) => (
                  <div key={j} className="pi-metric">
                    <span className="pi-metric__value">{m.value}</span>
                    <span className="pi-metric__label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .pi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
        }
        .pi-card {
          display: grid;
          grid-template-columns: 200px 1fr;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-glass-border);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: var(--glow-card);
          transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
          position: relative;
        }
        .pi-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--color-accent-primary), #a78bfa);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .pi-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0,194,255,0.2);
          box-shadow: var(--shadow-xl), 0 0 0 1px rgba(0,194,255,0.08);
        }
        .pi-card:hover::after { opacity: 1; }

        /* Photo */
        .pi-card__photo-col {
          position: relative;
          overflow: hidden;
        }
        .pi-card__photo {
          width: 200px;
          height: 100%;
          min-height: 260px;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform var(--transition-slow);
        }
        .pi-card:hover .pi-card__photo { transform: scale(1.04); }

        /* Fade edge on right side of photo */
        .pi-card__photo-fade {
          position: absolute;
          top: 0; right: 0;
          width: 56px; height: 100%;
          background: linear-gradient(90deg, transparent, var(--color-bg-elevated));
        }

        /* Tag badge positioned bottom-left of photo */
        .pi-card__tag {
          position: absolute;
          bottom: var(--space-3); left: var(--space-3);
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: var(--font-weight-medium);
          padding: 3px var(--space-2);
          border-radius: var(--radius-full);
          border: 1px solid;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        /* Content */
        .pi-card__content {
          padding: var(--space-6) var(--space-6) var(--space-6) var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        .pi-card__header { display: flex; flex-direction: column; gap: var(--space-1); }
        .pi-card__name {
          font-family: var(--font-heading);
          font-size: var(--text-md);
          font-weight: var(--font-weight-bold);
          color: var(--color-text-primary);
          line-height: 1.2;
        }
        .pi-card__role {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
        }
        .pi-card__divider {
          height: 1px;
          background: var(--color-glass-border);
        }
        .pi-card__bio {
          font-size: var(--text-sm);
          line-height: var(--line-height-loose);
          color: var(--color-text-secondary);
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        /* Mini metrics */
        .pi-card__metrics {
          display: flex;
          gap: var(--space-4);
          padding-top: var(--space-2);
          border-top: 1px solid var(--color-glass-border);
        }
        .pi-metric {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .pi-metric__value {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--font-weight-bold);
          color: var(--color-accent-primary);
        }
        .pi-metric__label {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
        }

        @media (max-width: 768px) {
          .pi-card { grid-template-columns: 140px 1fr; }
          .pi-card__photo { width: 140px; }
        }
        @media (max-width: 540px) {
          .pi-grid { grid-template-columns: 1fr; }
          .pi-card { grid-template-columns: 1fr; }
          .pi-card__photo { width: 100%; height: 200px; min-height: unset; }
          .pi-card__photo-fade { display: none; }
          .pi-card__tag { bottom: auto; top: var(--space-3); }
        }
      `}</style>
    </>
  );
}

export default PersonalInfo;
