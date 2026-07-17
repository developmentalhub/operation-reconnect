import Reveal from '../../components/Reveal';

const topics = [
  "How To Start A Conversation",
  "Finding Your People",
  "Building Confidence",
];

const perks = [
  {
    title: "Learn Skills",
    text: "Practical communication skills you can use straight away.",
    tone: "coral",
  },
  {
    title: "Meet Ideas",
    text: "Discover ways to make friendships feel easier.",
    tone: "blue",
  },
  {
    title: "Take Action",
    text: "Finish every session with a Reconnect Challenge.",
    tone: "yellow",
  },
];

export default function TeenWebinarPage() {
  return (
    <main>

      <section className="webinar-hero">

        <div className="webinar-badge">
          TEEN RECONNECT LIVE
        </div>

        <h1>
          Build Confidence.
          Find Your People.
        </h1>

        <p className="webinar-subtitle">
          A weekly 30-minute workshop helping teenagers
          improve conversations, friendships, and confidence.
        </p>

        <div className="weekly-schedule">
          <div>Every Thursday</div>
          <div>5:00–5:30 PM (AEST)</div>
          <div>Free to attend</div>
        </div>

      </section>


      <Reveal>

        <section className="booking-section">

          <div className="register-card">

            <h2>
              Join Teen Reconnect Live
            </h2>

            <p>
              Learn a new connection skill every week,
              ask questions, and complete challenges
              that help you connect in real life.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfk29cEQpP6iVZ4XQZ9Sem_yMeO8M0JpLSo5dxY2dzgkplW7Q/viewform?usp=sharing&ouid=112800969583636718113"
              target="_blank"
              rel="noopener noreferrer"
              className="register-button"
            >
              Reserve Your Spot
            </a>

          </div>

        </section>

      </Reveal>


      <section className="perks-section">

        <h2>
          What You'll Experience
        </h2>


        <div className="perk-row">

          {perks.map((perk, i) => (

            <Reveal key={perk.title} delay={i * 100}>

              <div className={`perk-badge tone-${perk.tone}`}>

                <h3>
                  {perk.title}
                </h3>

                <p>
                  {perk.text}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </section>


      <section className="topic-section">

        <h2>
          Upcoming Topics
        </h2>

        <div className="topic-list">

          {topics.map((topic) => (

            <div className="topic-card" key={topic}>
              {topic}
            </div>

          ))}

        </div>

      </section>


    </main>
  );
}