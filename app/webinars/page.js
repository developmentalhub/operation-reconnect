import Reveal from "../components/Reveal";

const registrationLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSda-3B0JM14IaHojgZpRm00UeWMJ2sJQ8-kCY8nsHGNgOQbOQ/viewform";

const contactEmail = "operationreconnecthp@gmail.com";

const webinarDetails = [
  {
    label: "Date",
    value: "Thursday 6 August 2026",
    tone: "yellow",
  },
  {
    label: "Time",
    value: "5:30pm to 6:30pm AEST",
    tone: "green",
  },
  {
    label: "Cost",
    value: "Free",
    tone: "coral",
  },
  {
    label: "Where",
    value: "Live online webinar",
    tone: "blue",
  },
];

const learningPoints = [
  {
    number: "01",
    title: "Introduce activities well",
    description:
      "Frame team-building in a way that feels relevant and age-appropriate for teenagers.",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Engage reluctant students",
    description:
      "Support teenagers who feel self-conscious, unsure or worried about looking silly.",
    tone: "green",
  },
  {
    number: "03",
    title: "Avoid forced sharing",
    description:
      "Encourage conversation without asking students to reveal personal information.",
    tone: "coral",
  },
  {
    number: "04",
    title: "Include quieter students",
    description:
      "Create participation options that respect confidence, comfort and student choice.",
    tone: "blue",
  },
  {
    number: "05",
    title: "Manage a full class",
    description:
      "Run interactive activities with 25 to 30 students without the room becoming chaotic.",
    tone: "green",
  },
  {
    number: "06",
    title: "Build genuine connection",
    description:
      "Use shared interests and simple conversations to help students find common ground.",
    tone: "yellow",
  },
];

const toolFeatures = [
  "Create five or six student teams",
  "Run timed whole-class connection activities",
  "Facilitate Two Truths and a Dream",
  "Complete achievable six-minute team challenges",
  "Record team points and class progress",
  "Finish with a guided class reflection",
];

const marqueeWords = [
  "REAL CLASSROOMS",
  "REAL TEENAGERS",
  "PRACTICAL ACTIVITIES",
  "NO AWKWARD ICEBREAKERS",
];

export const metadata = {
  title: "Free Teacher Webinar | Operation Reconnect",
  description:
    "Join Operation Reconnect for a free live teacher webinar about engaging teenagers in practical team-building activities.",
};

export default function WebinarsPage() {
  return (
    <>
      <section className="teacher-webinar-hero">
        <div className="teacher-webinar-hero-inner">
          <Reveal>
            <div className="teacher-webinar-hero-copy">
              <div className="webinar-badge">
                FREE LIVE TEACHER WEBINAR
              </div>

              <h1>Team Building for Teens Without the Eye Rolls</h1>

              <p className="teacher-webinar-hero-subtitle">
                Practical ways to help teenagers communicate, participate and
                connect without making team-building feel childish, awkward or
                forced.
              </p>

              <div className="teacher-webinar-actions">
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="register-button"
                >
                  Reserve your free spot
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className="teacher-webinar-secondary-button"
                >
                  Ask us a question
                </a>
              </div>

              <p className="hand-note teacher-webinar-hand-note">
                free for teachers ↗
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="teacher-webinar-date-card">
              <span className="teacher-webinar-date-label">
                Save the date
              </span>

              <strong>Thursday</strong>

              <div className="teacher-webinar-date-number">6</div>

              <strong>August 2026</strong>

              <div className="teacher-webinar-date-divider" />

              <p>5:30pm to 6:30pm</p>
              <p>AEST</p>
              <p>Live online</p>

              <span className="teacher-webinar-free-sticker">
                FREE
              </span>
            </div>
          </Reveal>
        </div>

        <svg
          className="cloud-divider"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,32 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, index) => (
            <span className="marquee-item" key={`${word}-${index}`}>
              {word}
              <span className="marquee-dot">●</span>
            </span>
          ))}
        </div>
      </div>

      <main className="teacher-webinar-main">
        <section className="teacher-webinar-details">
          <div className="teacher-webinar-details-grid">
            {webinarDetails.map((detail, index) => (
              <Reveal key={detail.label} delay={index * 80}>
                <article
                  className={`teacher-webinar-detail-card teacher-detail-${detail.tone}`}
                >
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="teacher-webinar-intro">
          <Reveal>
            <div className="teacher-webinar-intro-heading">
              <span className="teacher-webinar-sticker">
                WHY THIS WEBINAR?
              </span>

              <h2>Team building does not have to feel awkward</h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="teacher-webinar-intro-copy">
              <p>
                Team-building activities can lose the room quickly when
                teenagers think they feel childish, embarrassing or forced.
              </p>

              <p>
                During this webinar, the Operation Reconnect team will
                demonstrate practical activities that feel age-appropriate,
                purposeful and genuinely engaging.
              </p>

              <p>
                You will see how to explain the activities, organise a full
                class, support reluctant students and keep everyone involved
                without placing unnecessary pressure on individuals.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="teacher-webinar-classroom-banner">
          <Reveal>
            <div className="teacher-webinar-classroom-inner">
              <div className="teacher-webinar-classroom-copy">
                <span className="teacher-webinar-sticker teacher-webinar-sticker-yellow">
                  DESIGNED FOR REAL CLASSROOMS
                </span>

                <h2>
                  See how the activities work before trying them yourself
                </h2>

                <p>
                  This is a practical teacher session. We will walk through the
                  games step by step and show you how to use them with a class
                  of 25 to 30 students.
                </p>
              </div>

              <div className="teacher-webinar-class-size">
                <span>25–30</span>
                <strong>students</strong>
                <small>Full-class activities</small>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="teacher-webinar-learning-section">
          <Reveal>
            <div className="teacher-webinar-centred-heading">
              <span className="teacher-webinar-sticker teacher-webinar-sticker-yellow">
                DURING THE WEBINAR
              </span>

              <h2>
                Learn how to run activities teenagers will actually join
              </h2>

              <p>
                Clear, practical strategies you can use with a secondary class.
              </p>
            </div>
          </Reveal>

          <div className="teacher-webinar-learning-grid">
            {learningPoints.map((point, index) => (
              <Reveal key={point.number} delay={index * 70}>
                <article
                  className={`teacher-webinar-learning-card teacher-learning-${point.tone}`}
                >
                  <span className="teacher-webinar-learning-number">
                    {point.number}
                  </span>

                  <h3>{point.title}</h3>

                  <p>{point.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="teacher-webinar-tool-section">
          <Reveal>
            <div className="teacher-webinar-tool-card">
              <div className="teacher-webinar-tool-copy">
                <span className="teacher-webinar-sticker">
                  INCLUDED WHEN YOU SIGN UP
                </span>

                <h2>Interactive Team-Building Classroom Tool</h2>

                <p>
                  Everyone who signs up will receive access to our interactive
                  classroom tool during the live webinar.
                </p>

                <p>
                  Project the tool onto your classroom screen and follow the
                  teacher instructions to guide students through each activity.
                </p>

                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="register-button"
                >
                  Sign up and receive the tool
                </a>
              </div>

              <div className="teacher-webinar-tool-list">
                <h3>The classroom tool includes:</h3>

                <ul>
                  {toolFeatures.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="teacher-webinar-audience-section">
          <div className="teacher-webinar-audience-grid">
            <Reveal>
              <article className="teacher-webinar-audience-card teacher-webinar-audience-blue">
                <span className="teacher-webinar-sticker">
                  WHO IS IT FOR?
                </span>

                <h2>Teachers working with teenagers</h2>

                <p>
                  This webinar is suitable for secondary teachers, specialist
                  teachers, wellbeing staff, learning support teachers and
                  other educators supporting teenage students.
                </p>

                <p>
                  You do not need previous team-building experience. Everything
                  will be explained and demonstrated clearly.
                </p>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="teacher-webinar-audience-card teacher-webinar-audience-green">
                <span className="teacher-webinar-sticker">
                  MORE TOPICS COMING
                </span>

                <h2>More practical teacher webinars are on the way</h2>

                <p>
                  This is the first webinar in our Operation Reconnect teacher
                  series.
                </p>

                <p>
                  Future sessions will focus on teenage confidence,
                  communication, participation and meaningful connection.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="teacher-webinar-final-section">
          <Reveal>
            <div className="teacher-webinar-final-card">
              <span className="teacher-webinar-sticker teacher-webinar-sticker-yellow">
                FREE REGISTRATION
              </span>

              <h2>Reserve your place for Thursday 6 August</h2>

              <p>
                Join us live from 5:30pm to 6:30pm AEST and leave with practical
                activities you can use with teenagers in your classroom.
              </p>

              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                Reserve your free spot
              </a>

              <p className="teacher-webinar-contact">
                Need help registering?{" "}
                <a href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </p>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}