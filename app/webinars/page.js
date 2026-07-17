import Reveal from '../components/Reveal';

const options = [
  {
    title: "Teen Reconnect Live",
    description:
      "A weekly workshop helping teenagers build confidence, make friends, and find their people.",
    time: "Every Thursday • 5:00–5:30 PM (AEST)",
    link: "/webinars/teens",
    tone: "coral",
  },
  {
    title: "Teacher Reconnect Live",
    description:
      "Practical strategies, activities, and ideas to help teachers build stronger classroom connections.",
    time: "Every Tuesday • 5:00–5:30 PM (AEST)",
    link: "/webinars/teachers",
    tone: "blue",
  },
];

const perks = [
  {
    label: "New Topic Every Week",
    description:
      "Every session explores a new skill around confidence, communication, and connection.",
    tone: "coral",
  },
  {
    label: "Live Q&A",
    description:
      "Ask questions and get practical advice during every session.",
    tone: "blue",
  },
  {
    label: "Reconnect Challenge",
    description:
      "Leave each workshop with a challenge to complete before the next one.",
    tone: "yellow",
  },
];

export default function WebinarsPage() {
  return (
    <main>

      <section className="webinar-hero">

        <div className="webinar-badge">
          RECONNECT LIVE
        </div>

        <h1>
          Weekly Webinars For Real Connection
        </h1>

        <p className="webinar-subtitle">
          Live sessions helping teenagers and teachers
          build confidence, communication skills,
          and stronger communities.
        </p>

      </section>

<div className="hand-note webinar-choice-note">
  ↓ pick your path
</div>
      <section className="webinar-options">

        {options.map((option, i) => (
          <Reveal key={option.title} delay={i * 100}>

            <div className={`webinar-option tone-${option.tone}`}>

              <h2>
                {option.title}
              </h2>

              <p>
                {option.description}
              </p>

              <strong>
                {option.time}
              </strong>

              <a href={option.link}>
                Learn more
              </a>

            </div>

          </Reveal>
        ))}

      </section>


      <section className="perks-section">

        <h2>
          What You'll Get
        </h2>

        <div className="perk-row">

          {perks.map((perk, i) => (
            <Reveal key={perk.label} delay={i * 100}>

              <div className={`perk-badge tone-${perk.tone}`}>

                <h3>
                  {perk.label}
                </h3>

                <p>
                  {perk.description}
                </p>

              </div>

            </Reveal>
          ))}

        </div>

      </section>


    </main>
  );
}