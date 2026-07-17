import Reveal from "../components/Reveal";
import styles from "./webinars.module.css";

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
    value: "Live online",
    tone: "blue",
  },
];

const learningPoints = [
  {
    number: "01",
    title: "Introduce activities without instant resistance",
    description:
      "Explain the purpose without making the activity sound childish, awkward or like another forced icebreaker.",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Respond to eye rolls without creating a battle",
    description:
      "Keep the session moving without lecturing students, demanding enthusiasm or turning reluctance into confrontation.",
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
    title: "Include quieter students",
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

export const metadata = {
  title: "Team Building for Teens Without the Eye Rolls",
  description:
    "A free live Operation Reconnect webinar for teachers who want practical team-building activities teenagers are more likely to join.",
};

export default function WebinarsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Reveal>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                Free live teacher webinar
              </span>

              <h1>Team Building for Teens Without the Eye Rolls</h1>

              <p className={styles.heroLead}>
                Teenagers often want to connect, but they do not want to be
                embarrassed, forced to share personal information or asked to
                join activities that feel childish.
              </p>

              <p className={styles.heroText}>
                This practical webinar will show you how to introduce and run
                team-building activities that teenagers are far more likely to
                join.
              </p>

              <div className={styles.heroActions}>
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  Reserve your free spot
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className={styles.secondaryButton}
                >
                  Ask us a question
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className={styles.dateCard}>
              <span className={styles.dateSticker}>Save the date</span>

              <p className={styles.dateDay}>Thursday</p>

              <div className={styles.dateNumber}>6</div>

              <p className={styles.dateMonth}>August 2026</p>

              <div className={styles.dateRule} />

              <p className={styles.dateTime}>
                5:30pm to 6:30pm
              </p>

              <p className={styles.dateMeta}>AEST</p>
              <p className={styles.dateMeta}>Live online</p>

              <span className={styles.freeSticker}>FREE</span>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className={styles.detailsGrid}>
          {webinarDetails.map((detail, index) => (
            <Reveal key={detail.label} delay={index * 70}>
              <article
                className={`${styles.detailCard} ${
                  styles[`detail${capitalise(detail.tone)}`]
                }`}
              >
                <span className={styles.detailLabel}>{detail.label}</span>
                <strong className={styles.detailValue}>{detail.value}</strong>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.introSection}>
        <Reveal>
          <div className={styles.introHeading}>
            <span className={styles.sticker}>Why this webinar?</span>

            <h2>
              The activity is not always the problem. Sometimes it is how it is
              introduced.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className={styles.introCopy}>
            <p>
              A team-building activity can lose a teenage audience within
              seconds.
            </p>

            <p>
              Call it an icebreaker, make it feel too childish or ask students
              to perform in front of the group, and many teenagers will decide
              they are not participating before you have finished explaining
              it.
            </p>

            <p>
              In this webinar, we will explore how to lower that resistance
              without pressuring students or trying to manufacture enthusiasm.
            </p>

            <p>
              You will see how small changes to your language, group structure
              and activity instructions can make participation feel safer,
              more natural and less embarrassing.
            </p>
          </div>
        </Reveal>
      </section>

      <section className={styles.realClassroomsSection}>
        <Reveal>
          <div className={styles.realClassroomsInner}>
            <div className={styles.realClassroomsCopy}>
              <span className={`${styles.sticker} ${styles.yellowSticker}`}>
                Designed for real classrooms
              </span>

              <h2>For the students who ask, “Do we have to?”</h2>

              <p>
                This webinar is not built around a perfectly cooperative group
                of students.
              </p>

              <p>
                It is designed for real secondary classrooms where some
                teenagers will jump in, some will hang back, some will make
                jokes and others will avoid attention completely.
              </p>

              <p>
                We will show you how to organise activities for a full class
                while giving quieter and more reluctant teenagers a way into
                the experience.
              </p>
            </div>

            <div className={styles.classSizeCard}>
              <span>25–30</span>
              <strong>students</strong>
              <small>Practical full-class activities</small>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={styles.learningSection}>
        <Reveal>
          <div className={styles.sectionHeading}>
            <span className={styles.sticker}>What teachers will learn</span>

            <h2>Help teenagers participate without forcing the moment</h2>

            <p>
              Practical strategies for reducing resistance, protecting student
              dignity and helping more teenagers give the activity a go.
            </p>
          </div>
        </Reveal>

        <div className={styles.learningGrid}>
          {learningPoints.map((point, index) => (
            <Reveal key={point.number} delay={index * 60}>
              <article
                className={`${styles.learningCard} ${
                  styles[`learning${capitalise(point.tone)}`]
                }`}
              >
                <span className={styles.learningNumber}>
                  {point.number}
                </span>

                <h3>{point.title}</h3>

                <p>{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.toolSection}>
        <Reveal>
          <div className={styles.toolCard}>
            <div className={styles.toolCopy}>
              <span className={`${styles.sticker} ${styles.yellowSticker}`}>
                Included when you register
              </span>

              <h2>
                A ready-to-use classroom tool that keeps the activity moving
              </h2>

              <p>
                Everyone who registers will receive access to the interactive
                Operation Reconnect classroom tool during the live webinar.
              </p>

              <p>
                Project the tool onto your classroom screen and use it to guide
                students through each stage of the session.
              </p>

              <p>
                It includes clear teacher instructions, visible timers, team
                challenges, scoring and reflection prompts, so you are not
                trying to explain everything while also managing the room.
              </p>

              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.darkButton}
              >
                Sign up and receive the tool
              </a>
            </div>

            <div className={styles.toolList}>
              <h3>The classroom tool includes:</h3>

              <ul>
                {toolFeatures.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={styles.audienceSection}>
        <div className={styles.audienceGrid}>
          <Reveal>
            <article className={`${styles.audienceCard} ${styles.audienceBlue}`}>
              <span className={styles.sticker}>Who is it for?</span>

              <h2>Teachers who want connection without the cringe</h2>

              <p>
                This webinar is for secondary teachers, wellbeing staff,
                learning support teachers, specialist teachers and educators
                who work with teenagers.
              </p>

              <p>
                It will be particularly useful when students are disconnected,
                hesitant to participate, unfamiliar with one another or quick
                to dismiss anything that resembles a traditional icebreaker.
              </p>

              <p>
                You do not need previous experience running team-building
                programs. The activities and classroom setup will be
                demonstrated step by step.
              </p>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article
              className={`${styles.audienceCard} ${styles.audienceGreen}`}
            >
              <span className={styles.sticker}>The real goal</span>

              <h2>The goal is not to force teenagers to have fun</h2>

              <p>
                The goal is to create an experience that feels safe enough,
                relevant enough and achievable enough for them to give it a go.
              </p>

              <p>
                Connection grows more naturally when students are not being
                pressured to perform, overshare or pretend to be enthusiastic.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className={styles.finalSection}>
        <Reveal>
          <div className={styles.finalCard}>
            <span className={`${styles.sticker} ${styles.yellowSticker}`}>
              Free registration
            </span>

            <h2>Reserve your place for Thursday 6 August</h2>

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
              className={styles.primaryButton}
            >
              Reserve your free spot
            </a>

            <p className={styles.contact}>
              Need help registering?{" "}
              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function capitalise(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}