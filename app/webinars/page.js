import Reveal from "../components/Reveal";

const registrationLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSda-3B0JM14IaHojgZpRm00UeWMJ2sJQ8-kCY8nsHGNgOQbOQ/viewform";

const contactEmail = "operationreconnecthp@gmail.com";

const webinarDetails = [
  {
    label: "Date",
    value: "Thursday 6 August 2026",
  },
  {
    label: "Time",
    value: "5:30–6:30 PM AEST",
  },
  {
    label: "Cost",
    value: "Free",
  },
  {
    label: "Location",
    value: "Live online webinar",
  },
];

const webinarTopics = [
  "Introduce team-building activities without immediately getting eye rolls",
  "Engage teenagers who are reluctant, self-conscious or worried about looking silly",
  "Encourage conversation without forcing students to share personal information",
  "Include quieter students while respecting their comfort and choice",
  "Run interactive team-building games with a class of 25 to 30 students",
  "Use shared interests to build communication and genuine classroom connection",
];

const teacherTakeaways = [
  {
    label: "Practical Classroom Activities",
    description:
      "Learn age-appropriate team-building activities that can be used with a full secondary classroom.",
    tone: "coral",
  },
  {
    label: "Clear Teacher Guidance",
    description:
      "See how to explain each activity, organise groups, use the timers and keep students participating.",
    tone: "blue",
  },
  {
    label: "Interactive Classroom Tool",
    description:
      "Everyone who signs up will receive access to our interactive team-building tool during the live webinar.",
    tone: "yellow",
  },
];

export default function WebinarsPage() {
  return (
    <main>
      <section className="webinar-hero">
        <div className="webinar-badge">FREE LIVE TEACHER WEBINAR</div>

        <h1>Team Building for Teens Without the Eye Rolls</h1>

        <p className="webinar-subtitle">
          A practical live session for teachers who want to help teenagers
          communicate, participate and connect without making team-building
          feel childish, awkward or forced.
        </p>

        <div className="webinar-hero-actions">
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="webinar-primary-button"
          >
            Reserve your free spot
          </a>

          <a
            href={`mailto:${contactEmail}`}
            className="webinar-secondary-button"
          >
            Ask us a question
          </a>
        </div>

        <p className="webinar-contact">
          Questions? Email{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </section>

      <div className="hand-note webinar-choice-note">
        ↓ Thursday 6 August 2026
      </div>

      <section className="webinar-options">
        <Reveal>
          <div className="webinar-option tone-blue featured-webinar-option">
            <div className="webinar-option-heading">
              <span className="webinar-option-label">
                UPCOMING LIVE SESSION
              </span>

              <h2>Team Building for Teens</h2>
            </div>

            <p>
              Team-building activities can quickly feel awkward, childish or
              forced for teenagers. During this webinar, the Operation
              Reconnect team will demonstrate activities that feel
              age-appropriate, purposeful and genuinely engaging.
            </p>

            <p>
              You will see how the activities are introduced, how students are
              organised into teams and how a teacher can keep a full class
              involved without placing unnecessary pressure on individual
              students.
            </p>

            <div className="webinar-detail-grid">
              {webinarDetails.map((detail) => (
                <div className="webinar-detail-card" key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}
            </div>

            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="webinar-primary-button"
            >
              Reserve your free spot
            </a>
          </div>
        </Reveal>
      </section>

      <section className="webinar-learning-section">
        <Reveal>
          <div className="webinar-learning-copy">
            <span className="webinar-section-label">
              DURING THE WEBINAR
            </span>

            <h2>
              Learn how to run activities teenagers will actually join
            </h2>

            <p>
              This is a practical teacher session rather than a lecture about
              why connection matters. We will demonstrate how to explain the
              games, organise a class of 25 to 30 students, support reluctant
              participants and keep the activities moving.
            </p>
          </div>
        </Reveal>

        <div className="webinar-topic-grid">
          {webinarTopics.map((topic, index) => (
            <Reveal key={topic} delay={index * 70}>
              <div className="webinar-topic-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{topic}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="perks-section">
        <h2>What Teachers Will Receive</h2>

        <div className="perk-row">
          {teacherTakeaways.map((perk, index) => (
            <Reveal key={perk.label} delay={index * 100}>
              <div className={`perk-badge tone-${perk.tone}`}>
                <h3>{perk.label}</h3>
                <p>{perk.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="webinar-tool-section">
        <Reveal>
          <div className="webinar-tool-card">
            <div>
              <span className="webinar-section-label">
                INCLUDED FOR THOSE WHO SIGN UP
              </span>

              <h2>Interactive Team-Building Classroom Tool</h2>

              <p>
                Everyone who signs up for the webinar will receive access to
                our interactive classroom tool during the live session.
              </p>

              <p>
                The tool can be projected onto the classroom screen and guides
                teachers through:
              </p>

              <ul className="webinar-tool-list">
                <li>creating five or six student teams</li>
                <li>running timed whole-class connection activities</li>
                <li>facilitating Two Truths and a Dream</li>
                <li>completing short six-minute interest-circle challenges</li>
                <li>recording team points and class progress</li>
                <li>finishing with a class reflection</li>
              </ul>
            </div>

            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="webinar-primary-button"
            >
              Sign up and receive the tool
            </a>
          </div>
        </Reveal>
      </section>

      <section className="webinar-audience-section">
        <Reveal>
          <div className="webinar-audience-card">
            <span className="webinar-section-label">
              WHO THIS SESSION IS FOR
            </span>

            <h2>Designed for teachers working with teenagers</h2>

            <p>
              This webinar is suitable for secondary teachers, specialist
              teachers, wellbeing staff, learning support teachers and
              educators supporting teenage students.
            </p>

            <p>
              You do not need previous team-building experience. The
              activities will be demonstrated step by step so you can
              understand how to use them with your own class.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="upcoming-webinars-section">
        <Reveal>
          <div className="upcoming-webinars-card">
            <span className="webinar-section-label">
              MORE TEACHER TOPICS COMING SOON
            </span>

            <h2>More practical Operation Reconnect webinars are coming</h2>

            <p>
              This team-building session is the first webinar in our teacher
              series. We will be announcing more practical sessions focused on
              teenage confidence, communication, participation and meaningful
              connection.
            </p>

            <p>
              Future topics and dates will be shared soon.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="webinar-final-cta">
        <Reveal>
          <div className="webinar-final-cta-card">
            <span className="webinar-section-label">
              FREE REGISTRATION
            </span>

            <h2>Reserve your place for Thursday 6 August</h2>

            <p>
              Join us live from 5:30 PM to 6:30 PM AEST and leave with
              practical activities you can use with teenagers in your
              classroom.
            </p>

            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="webinar-primary-button"
            >
              Reserve your free spot
            </a>

            <p className="webinar-contact">
              Need help registering? Email{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}