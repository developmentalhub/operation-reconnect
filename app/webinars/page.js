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
    title: "Introduce activities without instant resistance",
    description:
      "Learn how to explain the purpose without making the activity sound childish, awkward or like another forced icebreaker.",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Respond to eye rolls without creating a battle",
    description:
      "Keep the session moving without lecturing students, demanding enthusiasm or turning reluctance into a confrontation.",
    tone: "green",
  },
  {
    number: "03",
    title: "Reduce the fear of looking silly",
    description:
      "Lower the social risk so teenagers can participate without feeling exposed, embarrassed or singled out.",
    tone: "coral",
  },
  {
    number: "04",
    title: "Encourage conversation without forced sharing",
    description:
      "Create opportunities for connection without asking students to reveal personal information in front of the group.",
    tone: "blue",
  },
  {
    number: "05",
    title: "Include quieter students without putting them on the spot",
    description:
      "Offer different ways to participate so confidence can build gradually and students still have a sense of choice.",
    tone: "green",
  },
  {
    number: "06",
    title: "Manage the energy of a full class",
    description:
      "Use clear timing, team structures and instructions to keep activities active, purposeful and manageable.",
    tone: "yellow",
  },
];

const toolFeatures = [
  "Set up five or six student teams",
  "Run short timed connection activities",
  "Facilitate Two Truths and a Dream",
  "Complete achievable six-minute team challenges",
  "Track team points and class progress",
  "Finish with reflection without creating an awkward sharing circle",
];

const marqueeWords = [
  "NO FORCED ICEBREAKERS",
  "REAL TEENAGERS",
  "REAL CLASSROOMS",
  "CONNECTION WITHOUT THE CRINGE",
];

export const metadata = {
  title: "Team Building for Teens Without the Eye Rolls",
  description:
    "A free live Operation Reconnect webinar for teachers who want practical team-building activities teenagers are more likely to join.",
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
                You announce a team-building activity and immediately see the
                folded arms, awkward silence and sideways looks across the room.
              </p>

              <p className="teacher-webinar-hero-subtitle">
                Teenagers often want to connect, but they do not want to be
                embarrassed, forced to share personal information or asked to
                participate in activities that feel childish.
              </p>

              <p className="teacher-webinar-hero-subtitle">
                This free live webinar will show you how to introduce and run
                team-building activities that teenagers are far more likely to
                join.
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
                connection without the cringe ↗
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

              <h2>
                The activity is not always the problem. Sometimes it is how it
                is introduced.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="teacher-webinar-intro-copy">
              <p>
                A team-building activity can lose a teenage audience within
                seconds.
              </p>

              <p>
                Call it an icebreaker, make it feel too childish or ask
                students to perform in front of the group, and many teenagers
                will decide they are not participating before you have
                finished explaining it.
              </p>

              <p>
                In this practical webinar, we will explore how to lower that
                resistance without pressuring students or trying to
                manufacture enthusiasm.
              </p>

              <p>
                You will see how small changes to your language, group
                structure and activity instructions can make participation
                feel safer, more natural and less embarrassing.
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
                  Designed for the students who say, “Do we have to?”
                </h2>

                <p>
                  This webinar is not built around a perfectly cooperative
                  group of students.
                </p>

                <p>
                  It is designed for real secondary classrooms where some
                  teenagers will jump in, some will hang back, some will make
                  jokes and others will avoid attention completely.
                </p>

                <p>
                  We will show you how to organise activities for 25 to 30
                  students while giving quieter and more reluctant teenagers a
                  way into the experience.
                </p>
              </div>

              <div className="teacher-webinar-class-size">
                <span>25–30</span>
                <strong>students</strong>
                <small>Real full-class activities</small>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="teacher-webinar-learning-section">
          <Reveal>
            <div className="teacher-webinar-centred-heading">
              <span className="teacher-webinar-sticker teacher-webinar-sticker-yellow">
                WHAT TEACHERS WILL LEARN
              </span>

              <h2>
                Help teenagers participate without forcing the moment
              </h2>

              <p>
                Practical strategies for reducing resistance, protecting
                student dignity and helping more teenagers give the activity a
                go.
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

                <h2>
                  A ready-to-use classroom tool that keeps the activity moving
                </h2>

                <p>
                  Everyone who registers will receive access to the interactive
                  Operation Reconnect classroom tool during the live webinar.
                </p>

                <p>
                  The tool can be projected onto your classroom screen and used
                  to guide students through each stage of the session.
                </p>

                <p>
                  It gives teachers clear instructions, visible timers, team
                  challenges, scoring and reflection prompts, so you are not
                  trying to explain everything while also managing the room.
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

                <h2>
                  For teachers who want connection without the cringe
                </h2>

                <p>
                  This webinar is for secondary teachers, wellbeing staff,
                  learning support teachers, specialist teachers and educators
                  who work with teenagers.
                </p>

                <p>
                  It will be particularly useful when students are
                  disconnected, hesitant to participate, unfamiliar with one
                  another or quick to dismiss anything that resembles a
                  traditional icebreaker.
                </p>

                <p>
                  You do not need experience running team-building programs.
                  The activities and classroom setup will be demonstrated step
                  by step.
                </p>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="teacher-webinar-audience-card teacher-webinar-audience-green">
                <span className="teacher-webinar-sticker">
                  THE REAL GOAL
                </span>

                <h2>
                  The goal is not to force teenagers to have fun
                </h2>

                <p>
                  The goal is to create an experience that feels safe enough,
                  relevant enough and achievable enough for them to give it a
                  go.
                </p>

                <p>
                  Connection grows more naturally when students are not being
                  pressured to perform, overshare or pretend to be enthusiastic.
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

              <h2>
                Reserve your place for Thursday 6 August
              </h2>

              <p>
                Join us live on Thursday 6 August 2026 from 5:30pm to 6:30pm
                AEST.
              </p>

              <p>
                Registration is free, and everyone who signs up will receive
                access to the interactive classroom tool.
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